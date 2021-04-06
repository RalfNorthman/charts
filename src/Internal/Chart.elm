module Internal.Chart exposing
  ( Point
  , Container, container
  , Line, line, Label, label, Arrow, arrow
  , position
  , Bar, bar
  , Method, linear, monotone, Interpolation, interpolation, Area, area
  , Dot, circle, triangle, square, diamond, plus, cross
  --, tooltip
  , x, x1, x2, y, y1, y2, xOff, yOff, border, borderWidth, fontSize, color, width, leftAlign, rightAlign
  , rotate, length, roundTop, roundBottom, opacity, size, aura, auraWidth
  )

import Html as H exposing (Html)
import Html.Attributes as HA
import Svg as S exposing (Svg)
import Svg.Attributes as SA
import Svg.Events as SE
import Svg.Coordinates as Coord exposing (Plane, place, toSVGX, toSVGY, toCartesianX, toCartesianY, scaleSVG, scaleCartesian, placeWithOffset)
import Svg.Commands as C exposing (..)
import Internal.Interpolation as Interpolation
import Json.Decode as Json
import DOM
import Dict exposing (Dict)


-- TODO clean up plane
-- TODO clean up property


{-| -}
type alias Point =
  { x : Float
  , y : Float
  }


{-| -}
type alias Attribute c =
  c -> c


{-| -}
x : Float -> Attribute { a | x : Float }
x v config =
  { config | x = v }


{-| -}
x1 : Float -> Attribute { a | x1 : Maybe Float }
x1 v config =
  { config | x1 = Just v }


{-| -}
x2 : Float -> Attribute { a | x2 : Maybe Float }
x2 v config =
  { config | x2 = Just v }


{-| -}
y : Float -> Attribute { a | y : Float }
y v config =
  { config | y = v }


{-| -}
y1 : Float -> Attribute { a | y1 : Maybe Float }
y1 v config =
  { config | y1 = Just v }


{-| -}
y2 : Float -> Attribute { a | y2 : Maybe Float }
y2 v config =
  { config | y2 = Just v }


{-| -}
xOff : Float -> Attribute { a | xOff : Float }
xOff v config =
  { config | xOff = v }


{-| -}
yOff : Float -> Attribute { a | yOff : Float }
yOff v config =
  { config | yOff = v }


{-| -}
border : String -> Attribute { a | border : String }
border v config =
  { config | border = v }


{-| -}
borderWidth : Float -> Attribute { a | borderWidth : Float }
borderWidth v config =
  { config | borderWidth = v }


{-| -}
fontSize : Int -> Attribute { a | fontSize : Maybe Int }
fontSize v config =
  { config | fontSize = Just v }


{-| -}
color : String -> Attribute { a | color : String }
color v config =
  { config | color = v }


{-| -}
opacity : Float -> Attribute { a | opacity : Float }
opacity v config =
  { config | opacity = v }


{-| -}
aura : Float -> Attribute { a | aura : Float }
aura v config =
  { config | aura = v }


{-| -}
auraWidth : Float -> Attribute { a | auraWidth : Float }
auraWidth v config =
  { config | auraWidth = v }


{-| -}
size : Float -> Attribute { a | size : Float }
size v config =
  { config | size = v }


{-| -}
width : Float -> Attribute { a | width : Float }
width v config =
  { config | width = v }


{-| -}
length : Float -> Attribute { a | length : Float }
length v config =
  { config | length = v }


{-| -}
rotate : Float -> Attribute { a | rotate : Float }
rotate v config =
  { config | rotate = config.rotate + v }


{-| -}
roundTop : Float -> Attribute { a | roundTop : Float }
roundTop v config =
  { config | roundTop = v }


{-| -}
roundBottom : Float -> Attribute { a | roundBottom : Float }
roundBottom v config =
  { config | roundBottom = v }


{-| -}
rightAlign : Attribute { a | anchor : Anchor }
rightAlign config =
  { config | anchor = Start }


{-| -}
leftAlign : Attribute { a | anchor : Anchor }
leftAlign config =
  { config | anchor = End }


{-| -}
linear : Attribute { a | method : Method }
linear config =
  { config | method = Linear }


{-| -}
monotone : Attribute { a | method : Method }
monotone config =
  { config | method = Monotone }



-- CONTAINER


{-| -}
type alias Container msg =
  { id : String
  , attrs : List (S.Attribute msg)
  , htmlAttrs : List (H.Attribute msg)
  , responsive : Bool
  , events : List (Event msg)
  }


{-| -}
type alias Event msg =
  { name : String
  , handler : Plane -> Point -> msg
  }


container : Plane -> List (Attribute (Container msg)) -> List (Html msg) -> List (Svg msg) -> List (Html msg) -> Html msg
container plane edits below chartEls above =
  -- TODO seperate plane from container size
  let config =
        apply edits
          { id = "you-should-add-a-unique-id-here"
          , attrs = []
          , htmlAttrs = []
          , responsive = True
          , events = []
          }

      htmlAttrsDef =
        [ HA.class "elm-charts__container"
        , HA.style "position" "relative"
        ]

      htmlAttrsSize =
        if config.responsive then
          []
        else
          [ HA.style "width" (String.fromFloat plane.x.length ++ "px")
          , HA.style "height" (String.fromFloat plane.y.length ++ "px")
          ]

      htmlAttrs =
        config.htmlAttrs ++ htmlAttrsDef ++ htmlAttrsSize

      chart =
        S.svg
          (svgAttrsSize ++ config.attrs)
          ([frame] ++ chartEls ++ [catcher])

      svgAttrsSize =
        if config.responsive then
          [ SA.viewBox ("0 0 " ++ String.fromFloat plane.x.length ++ " " ++ String.fromFloat plane.y.length) ]
        else
          [ SA.width (String.fromFloat plane.x.length)
          , SA.height (String.fromFloat plane.y.length)
          ]

      frame =
        S.defs [] [ S.clipPath [ SA.id config.id ] [ S.rect chartPosition [] ] ]

      catcher =
        S.rect (chartPosition ++ List.map toEvent config.events) []

      toEvent event =
        SE.on event.name (decodePoint plane event.handler)

      chartPosition =
        [ SA.x (String.fromFloat plane.x.marginLower)
        , SA.y (String.fromFloat plane.y.marginUpper)
        , SA.width (String.fromFloat (plane.x.length - plane.x.marginLower - plane.x.marginUpper))
        , SA.height (String.fromFloat (plane.y.length - plane.y.marginLower - plane.y.marginUpper))
        , SA.fill "transparent"
        ]
  in
  H.div htmlAttrs (below ++ [ chart ] ++ above)



-- LINE


{-| -}
type alias Line =
  { x1 : Maybe Float
  , x2 : Maybe Float
  , y1 : Maybe Float
  , y2 : Maybe Float
  , color : String
  , width : Float
  }


{-| -}
line : Plane -> List (Attribute Line) -> Svg msg
line plane edits =
  let config =
        apply edits
          { x1 = Nothing
          , x2 = Nothing
          , y1 = Nothing
          , y2 = Nothing
          , color = "rgb(210, 210, 210)"
          , width = 1
          }

      ( ( x1_, x2_ ), ( y1_, y2_ ) ) =
        case ( ( config.x1, config.x2 ), ( config.y1, config.y2 ) ) of
          -- ONLY X
          ( ( Just a, Just b ), ( Nothing, Nothing ) ) ->
            ( ( a, b ), ( plane.y.min, plane.y.min ) )

          ( ( Just a, Nothing ), ( Nothing, Nothing ) ) ->
            ( ( a, a ), ( plane.y.min, plane.y.max ) )

          ( ( Nothing, Just b ), ( Nothing, Nothing ) ) ->
            ( ( b, b ), ( plane.y.min, plane.y.max ) )

          -- ONLY Y
          ( ( Nothing, Nothing ), ( Just a, Just b ) ) ->
            ( ( plane.x.min, plane.x.min ), ( a, b ) )

          ( ( Nothing, Nothing ), ( Just a, Nothing ) ) ->
            ( ( plane.x.min, plane.x.max ), ( a, a ) )

          ( ( Nothing, Nothing ), ( Nothing, Just b ) ) ->
            ( ( plane.x.min, plane.x.max ), ( b, b ) )

          -- MIXED

          ( ( Nothing, Just c ), ( Just a, Just b ) ) ->
            ( ( c, c ), ( a, b ) )

          ( ( Just c, Nothing ), ( Just a, Just b ) ) ->
            ( ( c, c ), ( a, b ) )

          ( ( Just a, Just b ), ( Nothing, Just c ) ) ->
            ( ( a, b ), ( c, c ) )

          ( ( Just a, Just b ), ( Just c, Nothing ) ) ->
            ( ( a, b ), ( c, c ) )

          -- NEITHER
          ( ( Nothing, Nothing ), ( Nothing, Nothing ) ) ->
            ( ( plane.x.min, plane.x.max ), ( plane.y.min, plane.y.max ) )

          _ ->
            ( ( Maybe.withDefault plane.x.min config.x1
              , Maybe.withDefault plane.x.max config.x2
              )
            , ( Maybe.withDefault plane.y.min config.y1
              , Maybe.withDefault plane.y.max config.y2
              )
            )

      cmds =
        [ C.Move x1_ y1_
        , C.Line x1_ y1_
        , C.Line x2_ y2_
        ]
  in
  S.path
    [ SA.class "elm-charts__line"
    , SA.stroke config.color
    , SA.strokeWidth (String.fromFloat config.width)
    , SA.d (C.description plane cmds)
    ]
    []



-- LABEL


{-| -}
type alias Label =
  { x : Float
  , y : Float
  , xOff : Float
  , yOff : Float
  , border : String
  , borderWidth : Float
  , fontSize : Maybe Int
  , color : String
  , anchor : Anchor
  -- TODO rotate
  }


{-| -}
type Anchor
  = End
  | Start
  | Middle


{-| -}
label : Plane -> List (Attribute Label) -> String -> Svg msg
label plane edits string =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , xOff = 0
          , yOff = 0
          , border = "white"
          , borderWidth = 0.1
          , fontSize = Nothing
          , color = "rgb(210, 210, 210)"
          , anchor = Middle
          }

      fontStyle =
        case config.fontSize of
          Just size_ -> "font-size: " ++ String.fromInt size_ ++ ";"
          Nothing -> ""

      anchorStyle =
        case config.anchor of
        End -> "text-anchor: end;"
        Start -> "text-anchor: start;"
        Middle -> "text-anchor: middle;"
  in
  S.text_
    [ SA.class "elm-charts__label"
    , SA.stroke config.border
    , SA.strokeWidth (String.fromFloat config.borderWidth)
    , SA.fill config.color
    , position plane config.x config.y config.xOff config.yOff
    , SA.style <| String.join " " [ "pointer-events: none;", fontStyle, anchorStyle ]
    ]
    [ S.tspan [] [ S.text string ] ]



-- ARROW


{-| -}
type alias Arrow =
  { x : Float
  , y : Float
  , xOff : Float
  , yOff : Float
  , color : String
  , width : Float
  , length : Float
  , rotate : Float
  }


{-| -}
arrow : Plane -> List (Attribute Arrow) -> Svg msg
arrow plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , xOff = 0
          , yOff = 0
          , color = "rgb(210, 210, 210)"
          , width = 4
          , length = 7
          , rotate = 0
          }

      points_ =
        "0,0 " ++ String.fromFloat config.length ++ "," ++ String.fromFloat config.width ++ " 0, " ++ String.fromFloat (config.width * 2)

      commands =
        "rotate(" ++ String.fromFloat config.rotate ++ ") translate(0 " ++ String.fromFloat -config.width ++ ") "
  in
  S.g
    [ SA.class "elm-charts__arrow"
    , position plane config.x config.y config.xOff config.yOff
    ]
    [ S.polygon
        [ SA.fill config.color
        , SA.points points_
        , SA.transform commands
        ]
        []
    ]



-- ITEMS


{-| -}
type Item datum a =
  Item
    { a | datum : datum
    , x1 : Float
    , x2 : Float
    , y1 : Float
    , y2 : Float
    }


{-| -}
type alias BinItem datum value =
  Item datum
    { items : List (BarItem datum value) }


{-| -}
type alias BarItem datum value =
  Item datum
    { x : Float
    , y : value
    , color : String
    , name : String -- TODO id instead?
    , unit : String
    }


{-| -}
type alias DotItem value datum =
  Item datum
    { x : Float
    , y : value
    , color : String
    , name : String -- TODO id instead?
    , unit : String
    , dot : Dot
    }


{-| -}
top : Item datum x -> Point
top (Item config) =
  { x = config.x1 + (config.x2 - config.x1)
  , y = config.y2
  }


{-| -}
bottom : Item datum x -> Point
bottom (Item config) =
  { x = config.x1 + (config.x2 - config.x1)
  , y = config.y1
  }


{-| -}
left : Item datum x -> Point
left (Item config) =
  { x = config.x1
  , y = config.y1 + (config.y2 - config.y1)
  }


{-| -}
right : Item datum x -> Point
right (Item config) =
  { x = config.x2
  , y = config.y1 + (config.y2 - config.y1)
  }


{-| -}
center : Item datum x -> Point
center (Item config) =
  { x = config.x1 + (config.x2 - config.x1)
  , y = config.y1 + (config.y2 - config.y1)
  }


{-| -}
datum : Item datum x -> datum
datum (Item config) =
  config.datum


{-| -}
value : Item datum { config | y : value } -> value
value (Item config) =
  config.y




-- BAR


{-| -}
type alias Bin data =
  { datum : data
  , start : Float
  , end : Float
  }


{-| -}
toBinsFromConstant : (data -> Float) -> Float -> List data -> List (Bin (List data))
toBinsFromConstant toX width_ data =
  let fold datum_ acc =
        Dict.update (ceiling (toX datum_)) (updateDict datum_) acc

      updateDict datum_ prev =
        prev
          |> Maybe.map (\ds -> datum_ :: ds)
          |> Maybe.withDefault [ datum_ ]
          |> Just

      ceiling b =
        -- TODO
        let floored = toFloat (floor (b / width_)) * width_ in
        b - (b - floored) + width_
  in
  data
    |> List.foldr fold Dict.empty
    |> Dict.toList
    |> List.map (\( bin, ds ) -> { start = bin, end = bin + width_, datum = ds })


{-| -}
toBinsFromVariable : Maybe (data -> Float) -> Maybe (data -> Float) -> List data -> List (Bin data)
toBinsFromVariable start end =
  let toXs index prevM curr nextM =
        case ( start, end ) of
          ( Nothing, Nothing ) ->
            { datum = curr, start = toFloat (index + 1) - 0.5, end = toFloat (index + 1) + 0.5 }

          ( Just toStart, Nothing ) ->
            case ( prevM, nextM ) of
              ( _, Just next ) ->
                { datum = curr, start = toStart curr, end = toStart next }
              ( Just prev, Nothing ) ->
                { datum = curr, start = toStart curr, end = toStart curr + (toStart curr - toStart prev) }
              ( Nothing, Nothing ) ->
                { datum = curr, start = toStart curr, end = toStart curr + 1 }

          ( Nothing, Just toEnd ) ->
            case ( prevM, nextM ) of
              ( Just prev, _ ) ->
                { datum = curr, start = toEnd prev, end = toEnd curr }
              ( Nothing, Just next ) ->
                { datum = curr, start = toEnd curr - (toEnd next - toEnd curr), end = toEnd curr }
              ( Nothing, Nothing ) ->
                { datum = curr, start = toEnd curr - 1, end = toEnd curr }

          ( Just toStart, Just toEnd ) ->
            { datum = curr, start = toStart curr, end = toEnd curr }

      fold index prev acc list =
        case list of
          a :: b :: rest -> fold (index + 1) (Just a) (acc ++ [toXs index prev a (Just b)]) (b :: rest)
          a :: [] -> acc ++ [toXs index prev a Nothing]
          [] -> acc
  in
  fold 0 Nothing []


{-| -}
type alias Bar =
  { roundTop : Float
  , roundBottom : Float
  , color : String
  -- TODO , pattern : Pattern
  , x1 : Maybe Float
  , x2 : Maybe Float
  , y1 : Maybe Float
  , y2 : Maybe Float
  , border : String
  , borderWidth : Float
  -- TODO aura
  }


{-| -}
bar : Plane -> List (Attribute Bar) -> Svg msg
bar plane edits =
  -- TODO round via clipPath
  let config =
        apply edits
          { roundTop = 0
          , roundBottom = 0
          , border = "white"
          , borderWidth = 0
          , color = "rgb(5, 142, 218)"
          , x1 = Nothing
          , x2 = Nothing
          , y1 = Nothing
          , y2 = Nothing
          }

      x1_ = Maybe.withDefault plane.x.min config.x1
      x2_ = Maybe.withDefault plane.x.max config.x2
      y1_ = Maybe.withDefault plane.y.max config.y2
      y2_ = Maybe.withDefault (closestToZero plane) config.y1

      x_ = x1_
      y_ = max y1_ y2_
      bs = min y1_ y2_
      w = x2_ - x_
      bT = scaleSVG plane.x w * 0.5 * (clamp 0 1 config.roundTop)
      bB = scaleSVG plane.x w * 0.5 * (clamp 0 1 config.roundBottom)
      ys = abs (scaleSVG plane.y y_)
      rxT = scaleCartesian plane.x bT
      ryT = scaleCartesian plane.y bT
      rxB = scaleCartesian plane.x bB
      ryB = scaleCartesian plane.y bB

      commands =
        if bs == y_ then
          []
        else
          case ( config.roundTop > 0, config.roundBottom > 0 ) of
            ( False, False ) ->
              [ C.Move x_ bs
              , C.Line x_ y_
              , C.Line (x_ + w) y_
              , C.Line (x_ + w) bs
              ]

            ( True, False ) ->
              [ C.Move x_ bs
              , C.Line x_ (y_ + -ryT)
              , C.Arc bT bT -45 False True (x_ + rxT) y_
              , C.Line (x_ + w - rxT) y_
              , C.Arc bT bT -45 False True (x_ + w) (y_ + -ryT)
              , C.Line (x_ + w) bs
              , C.Line x_ bs
              ]

            ( False, True ) ->
              [ C.Move (x_ + rxB) bs
              , C.Arc bB bB -45 False True x_ (bs + ryB)
              , C.Line x_ y_
              , C.Line (x_ + w) y_
              , C.Line (x_ + w) (bs + ryB)
              , C.Arc bB bB -45 False True (x_ + w - rxB) bs
              , C.Line (x_ + rxB) bs
              ]

            ( True, True ) ->
              [ C.Move (x_ + rxB) bs
              , C.Arc bB bB -45 False True x_ (bs + ryB)
              , C.Line x_ (y_ - ryT)
              , C.Arc bT bT -45 False True (x_ + rxT) y_
              , C.Line (x_ + w - rxT) y_
              , C.Arc bT bT -45 False True (x_ + w) (y_ - ryT)
              , C.Line (x_ + w) (bs + ryB)
              , C.Arc bB bB -45 False True (x_ + w - rxB) bs
              , C.Line (x_ + rxB) bs
              ]
  in
  S.path
    [ SA.class "elm-charts__bar"
    , SA.fill config.color
    , SA.stroke config.border
    , SA.strokeWidth (String.fromFloat config.borderWidth)
    , SA.d (C.description plane commands)
    ]
    []



-- SERIES


{-| -}
type Method
  = Linear
  | Monotone


{-| -}
type alias Interpolation =
  { method : Method
  , color : String
  , width : Float
  }


{-| -}
interpolation : Plane -> (data -> Float) -> (data -> Maybe Float) -> List (Attribute Interpolation) -> List data -> Svg msg
interpolation plane toX toY edits data =
  let config =
        apply edits
          { method = Linear
          , color = "rgb(5, 142, 218)"
          , width = 1
          }

      view ( first, cmds, _ ) =
        S.path
          [ SA.class "elm-charts__interpolation-section"
          , SA.fill "transparent"
          , SA.stroke config.color
          , SA.strokeWidth (String.fromFloat config.width)
          , SA.d (C.description plane (Move first.x first.y :: cmds))
          ]
          []
  in
  S.g [ SA.class "elm-charts__interpolation-sections" ] <|
    List.map view (toCommands config.method toX toY data)


{-| -}
type alias Area =
  { method : Method
  , color : String
  , opacity : Float
  }


{-| -}
area : Plane -> (data -> Float) -> Maybe (data -> Maybe Float) -> (data -> Maybe Float) -> List (Attribute Area) -> List data -> Svg msg
area plane toX toY2M toY edits data =
  let config =
        apply edits
          { method = Linear
          , color = "rgb(5, 142, 218)"
          , opacity = 0.2
          }

      view cmds =
        S.path
          [ SA.class "elm-charts__area-section"
          , SA.fill config.color
          , SA.fillOpacity (String.fromFloat config.opacity)
          , SA.strokeWidth "0"
          , SA.fillRule "evenodd"
          , SA.d (C.description plane cmds)
          ]
          []

      withoutUnder ( first, cmds, end ) =
        view <|
          [ C.Move first.x 0, C.Line first.x first.y ] ++ cmds ++ [ C.Line end.x 0 ]

      withUnder ( firstBottom, cmdsBottom, endBottom ) ( firstTop, cmdsTop, endTop ) =
        view <|
          [ C.Move firstBottom.x firstBottom.y, C.Line firstTop.x firstTop.y ] ++ cmdsTop ++
          [ C.Move firstBottom.x firstBottom.y ] ++ cmdsBottom ++ [ C.Line endTop.x endTop.y ]
  in
  S.g [ SA.class "elm-charts__area-sections" ] <|
    case toY2M of
      Nothing -> List.map withoutUnder (toCommands config.method toX toY data)
      Just toY2 -> List.map2 withUnder (toCommands config.method toX toY2 data) (toCommands config.method toX toY data)


toCommands : Method -> (data -> Float) -> (data -> Maybe Float) -> List data -> List ( Point, List C.Command, Point )
toCommands method toX toY data =
  let fold datum_ acc =
        case toY datum_ of
          Just y_ ->
            case acc of
              latest :: rest -> (latest ++ [ { x = toX datum_, y = y_ } ]) :: rest
              [] -> [ { x = toX datum_, y = y_ } ] :: acc

          Nothing ->
            [] :: acc

      points =
        List.reverse (List.foldl fold [] data)

      commands =
        case method of
          Linear -> Interpolation.linear points
          Monotone -> Interpolation.monotone points

      toSets ps cmds =
        withBorder ps <| \first last_ -> ( first, cmds, last_ )
  in
  List.map2 toSets points commands
    |> List.filterMap identity



-- DOTS


{-| -}
type alias Dot =
  { x : Float
  , y : Float
  , color : String
  , opacity : Float
  , size : Float
  , border : String
  , borderWidth : Float
  , aura : Float
  , auraWidth : Float
  }


{-| -}
circle : Plane -> List (Attribute Dot) -> Svg msg
circle plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      radius = sqrt (area_ / pi)
      attrs r =
        [ SA.cx (String.fromFloat x_)
        , SA.cy (String.fromFloat y_)
        , SA.r (String.fromFloat r)
        ]
  in
  if config.aura > 0 then
    S.g [] -- TODO use path instead of circle
      [ S.circle (attrs (radius + config.auraWidth / 2) ++ toAuraAttrs config) []
      , S.circle (attrs radius ++ toStyleAttrs config) []
      ]
  else
    S.circle (attrs radius ++ toStyleAttrs config) []



{-| -}
triangle : Plane -> List (Attribute Dot) -> Svg msg
triangle plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      attrs off = [ SA.d (trianglePath area_ off x_ y_) ]
  in
  if config.aura > 0 then
    S.g []
      [ S.path (attrs config.auraWidth ++ toAuraAttrs config) []
      , S.path (attrs 0 ++ toStyleAttrs config) []
      ]
  else
    S.path (attrs 0 ++ toStyleAttrs config) []


{-| -}
square : Plane -> List (Attribute Dot) -> Svg msg
square plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      side = sqrt area_
      attrs s =
        [ SA.x <| String.fromFloat (x_ - s / 2)
        , SA.y <| String.fromFloat (y_ - s / 2)
        , SA.width (String.fromFloat s)
        , SA.height (String.fromFloat s)
        ]
  in
  if config.aura > 0 then
    S.g []
      [ S.rect (attrs (side + config.auraWidth) ++ toAuraAttrs config) []
      , S.rect (attrs side ++ toStyleAttrs config) []
      ]
  else
    S.rect (attrs side ++ toStyleAttrs config) []


{-| -}
diamond : Plane -> List (Attribute Dot) -> Svg msg
diamond plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      side = sqrt area_
      rotation = "rotate(45 " ++ String.fromFloat x_ ++ " " ++ String.fromFloat y_ ++ ")"
      attrs s =
        [ SA.x <| String.fromFloat (x_ - s / 2)
        , SA.y <| String.fromFloat (y_ - s / 2)
        , SA.width (String.fromFloat s)
        , SA.height (String.fromFloat s)
        , SA.transform rotation
        ]
  in
  if config.aura > 0 then
    S.g []
      [ S.rect (attrs (side + config.auraWidth) ++ toAuraAttrs config) []
      , S.rect (attrs side ++ toStyleAttrs config) []
      ]
  else
    S.rect (attrs side ++ toStyleAttrs config) []


{-| -}
plus : Plane -> List (Attribute Dot) -> Svg msg
plus plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      attrs off = [ SA.d (plusPath area_ off x_ y_) ]
  in
  if config.aura > 0 then
    S.g []
      [ S.path (attrs config.auraWidth ++ toAuraAttrs config) []
      , S.path (attrs 0 ++ toStyleAttrs config) []
      ]
  else
    S.path (attrs 0 ++ toStyleAttrs config) []



{-| -}
cross : Plane -> List (Attribute Dot) -> Svg msg
cross plane edits =
  let config =
        apply edits
          { x = plane.x.min
          , y = plane.y.max
          , color = "rgb(5, 142, 218)"
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          }

      x_ = toSVGX plane config.x
      y_ = toSVGY plane config.y
      area_ = 2 * pi * config.size
      rotation = "rotate(45 " ++ String.fromFloat x_ ++ " " ++ String.fromFloat y_ ++ ")"
      attrs off = [ SA.d (plusPath area_ off x_ y_), SA.transform rotation ]
  in
  if config.aura > 0 then
    S.g []
      [ S.path (attrs config.auraWidth ++ toAuraAttrs config) []
      , S.path (attrs 0 ++ toStyleAttrs config) []
      ]
  else
    S.path (attrs 0 ++ toStyleAttrs config) []


trianglePath : Float -> Float -> Float -> Float -> String
trianglePath area_ off x_ y_ =
  let side = sqrt (area_ * 4 / sqrt 3) + off * sqrt 3
      height = (sqrt 3) * side / 2
      fromMiddle = height - tan (degrees 30) * side / 2
  in
  String.join " "
    [ "M" ++ String.fromFloat x_ ++ " " ++ String.fromFloat (y_ - fromMiddle)
    , "l" ++ String.fromFloat (-side / 2) ++ " " ++ String.fromFloat height
    , "h" ++ String.fromFloat side
    , "z"
    ]


plusPath : Float -> Float -> Float -> Float ->  String
plusPath area_ off x_ y_ =
  let side = sqrt (area_ / 5) + off
      r3 = side
      r6 = side / 2
  in
  String.join " "
    [ "M" ++ String.fromFloat (x_ - r6) ++ " " ++ String.fromFloat (y_ - r3 - r6 + off)
    , "v" ++ String.fromFloat (r3 - off)
    , "h" ++ String.fromFloat (-r3 + off)
    , "v" ++ String.fromFloat r3
    , "h" ++ String.fromFloat (r3 - off)
    , "v" ++ String.fromFloat (r3 - off)
    , "h" ++ String.fromFloat r3
    , "v" ++ String.fromFloat (-r3 + off)
    , "h" ++ String.fromFloat (r3 - off)
    , "v" ++ String.fromFloat -r3
    , "h" ++ String.fromFloat (-r3 + off)
    , "v" ++ String.fromFloat (-r3 + off)
    , "h" ++ String.fromFloat -r3
    , "v" ++ String.fromFloat (r3 - off)
    ]


toStyleAttrs : Dot -> List (S.Attribute msg)
toStyleAttrs config =
  [ SA.stroke config.border
  , SA.strokeWidth (String.fromFloat config.borderWidth)
  , SA.fillOpacity (String.fromFloat config.opacity)
  , SA.fill config.color
  ]


toAuraAttrs : Dot -> List (S.Attribute msg)
toAuraAttrs config =
  [ SA.stroke config.color
  , SA.strokeWidth (String.fromFloat config.auraWidth)
  , SA.strokeOpacity (String.fromFloat config.aura)
  , SA.fill "transparent"
  ]



-- TOOLTIP

--type alias Tooltip

--tooltip : Tooltip -> Html msg


{-| -}
decodePoint : Plane -> (Plane -> Point -> msg) -> Json.Decoder msg
decodePoint plane toMsg =
  let
    handle mouseX mouseY rect =
      let
        widthPercent = rect.width / plane.x.length
        heightPercent = rect.height / plane.y.length

        xPrev = plane.x
        yPrev = plane.y

        newPlane =
          { x =
              { xPrev | length = rect.width
              , marginLower = plane.x.marginLower * widthPercent
              , marginUpper = plane.x.marginUpper * widthPercent
              }
          , y =
              { yPrev | length = rect.height
              , marginLower = plane.y.marginLower * heightPercent
              , marginUpper = plane.y.marginUpper * heightPercent
              }
          }
      in
      toMsg newPlane { x = mouseX - rect.left, y = mouseY - rect.top }
  in
  Json.map3 handle
    (Json.field "pageX" Json.float)
    (Json.field "pageY" Json.float)
    (DOM.target decodePosition)


decodePosition : Json.Decoder DOM.Rectangle
decodePosition =
  Json.oneOf
    [ DOM.boundingClientRect
    , Json.lazy (\_ -> DOM.parentElement decodePosition)
    ]



-- POSITIONING


position : Plane -> Float -> Float -> Float -> Float -> S.Attribute msg
position plane x_ y_ xOff_ yOff_ =
  SA.transform <| "translate(" ++ String.fromFloat (toSVGX plane x_ + xOff_) ++ "," ++ String.fromFloat (toSVGY plane y_ + yOff_) ++ ")"



-- HELPERS


withBorder : List a -> (a -> a -> b) -> Maybe b
withBorder stuff func =
  case stuff of
    first :: rest ->
      Just (func first (Maybe.withDefault first (last rest)))

    _ ->
      Nothing


last : List a -> Maybe a
last list =
  List.head (List.drop (List.length list - 1) list)


closestToZero : Plane -> Float
closestToZero plane =
  clamp plane.y.min plane.y.max 0


apply : List (a -> a) -> a -> a
apply funcs default =
  let apply_ f a = f a in
  List.foldl apply_ default funcs


