module Chart.Svg exposing
  ( Container, Event, container
  , Line, line
  , Tick, xTick, yTick
  , Label, label
  , Arrow, arrow
  , Bar, bar
  , Interpolation, interpolation, area
  , Dot, dot, toRadius
  , Tooltip, tooltip
  , Rect, rect
  , decoder, getNearest, getNearestX, getWithin, getWithinX, isWithinPlane
  , position, positionHtml
  , Generator, generate, floats, ints, times
  , TickValue, toTickValues, formatTime

  , Legends, legendsAt
  , Legend, lineLegend, barLegend

  , Plane, Position, Point
  , fromSvg, fromCartesian
  , lengthInSvgX, lengthInSvgY
  , lengthInCartesianX, lengthInCartesianY
  )

import Html as H exposing (Html)
import Html.Attributes as HA
import Svg as S exposing (Svg)
import Svg.Attributes as SA
import Svg.Events as SE
import Internal.Coordinates as Coord
import Internal.Commands as C exposing (..)
import Chart.Attributes as CA
import Internal.Interpolation as Interpolation
import Intervals as I
import Json.Decode as Json
import DOM
import Time
import DateFormat as F
import Dict exposing (Dict)
import Internal.Helpers as Helpers



-- CONTAINER


{-| -}
type alias Container msg =
  { attrs : List (S.Attribute msg)
  , htmlAttrs : List (H.Attribute msg)
  , responsive : Bool
  , events : List (Event msg)
  }


{-| -}
type alias Event msg =
  { name : String
  , handler : Plane -> Point -> msg
  }


container : Plane -> List (CA.Attribute (Container msg)) -> List (Html msg) -> List (Svg msg) -> List (Html msg) -> Html msg
container plane edits below chartEls above =
  -- TODO seperate plane from container size
  let config =
        apply edits
          { attrs = [ SA.style "overflow: visible;" ]
          , htmlAttrs = []
          , responsive = True
          , events = []
          }

      htmlAttrsDef =
        [ HA.class "elm-charts__container-inner"
        , HA.style "display" "flex"
        , HA.style "flex-direction" "column"
        ]

      htmlAttrsSize =
        if config.responsive then
          [ HA.style "width" "100%"
          , HA.style "height" "100%"
          ]
        else
          [ HA.style "width" (String.fromFloat plane.width ++ "px")
          , HA.style "height" (String.fromFloat plane.height ++ "px")
          ]

      htmlAttrs =
        config.htmlAttrs ++ htmlAttrsDef ++ htmlAttrsSize

      chart =
        S.svg
          (svgAttrsSize ++ config.attrs)
          (chartEls ++ [catcher])

      svgAttrsSize =
        if config.responsive then
          [ SA.viewBox ("0 0 " ++ String.fromFloat plane.width ++ " " ++ String.fromFloat plane.height) ]
        else
          [ SA.width (String.fromFloat plane.width)
          , SA.height (String.fromFloat plane.height)
          ]

      catcher =
        S.rect (chartPosition ++ List.map toEvent config.events) []

      toEvent event =
        SE.on event.name (decoder plane event.handler)

      chartPosition =
        [ SA.x (String.fromFloat plane.margin.left)
        , SA.y (String.fromFloat plane.margin.top)
        , SA.width (String.fromFloat (plane.width - plane.margin.left - plane.margin.right))
        , SA.height (String.fromFloat (plane.height - plane.margin.bottom - plane.margin.top))
        , SA.fill "transparent"
        ]
  in
  H.div
    [ HA.class "elm-charts__container"
    , HA.style "position" "relative"
    , HA.style "height" "100%"
    , HA.style "width" "100%"
    ]
    [ H.div htmlAttrs (below ++ [ chart ] ++ above) ]



-- TICK


{-| -}
type alias Tick =
  { color : String
  , width : Float
  , length : Float
  }


{-| -}
xTick : Plane -> List (CA.Attribute Tick) -> Point -> Svg msg
xTick plane edits point =
  tick plane edits True point


{-| -}
yTick : Plane -> List (CA.Attribute Tick) -> Point -> Svg msg
yTick plane edits point =
  tick plane edits False point


tick : Plane -> List (CA.Attribute Tick) -> Bool -> Point -> Svg msg
tick plane edits isX point =
  let config =
        apply edits
          { length = 5
          , color = "rgb(210, 210, 210)"
          , width = 1
          }
  in
  S.line
    [ SA.class "elm-charts__tick"
    , SA.stroke config.color
    , SA.strokeWidth (String.fromFloat config.width)
    , SA.x1 <| String.fromFloat (Coord.toSVGX plane point.x)
    , SA.x2 <| String.fromFloat (Coord.toSVGX plane point.x + if isX then 0 else -config.length)
    , SA.y1 <| String.fromFloat (Coord.toSVGY plane point.y)
    , SA.y2 <| String.fromFloat (Coord.toSVGY plane point.y + if isX then config.length else 0)
    ]
    []



-- LINE


{-| -}
type alias Line =
  { x1 : Maybe Float
  , x2 : Maybe Float
  , y1 : Maybe Float
  , y2 : Maybe Float
  , xOff : Float
  , yOff : Float
  , color : String
  , width : Float
  , dashed : List Float
  , opacity : Float
  , break : Bool
  }


{-| -}
line : Plane -> List (CA.Attribute Line) -> Svg msg
line plane edits =
  let config =
        apply edits
          { x1 = Nothing
          , x2 = Nothing
          , y1 = Nothing
          , y2 = Nothing
          , xOff = 0
          , yOff = 0
          , color = "rgb(210, 210, 210)"
          , width = 1
          , dashed = []
          , opacity = 1
          , break = False
          }

      ( ( x1_, x2_ ), ( y1_, y2_ ) ) =
        case ( ( config.x1, config.x2 ), ( config.y1, config.y2 ), ( round config.xOff, round config.yOff ) ) of
          -- ONLY X
          ( ( Just a, Just b ), ( Nothing, Nothing ), _ ) ->
            ( ( a, b ), ( plane.y.min, plane.y.min ) )

          ( ( Just a, Nothing ), ( Nothing, Nothing ), _ ) ->
            ( ( a, a ), ( plane.y.min, plane.y.max ) )

          ( ( Nothing, Just b ), ( Nothing, Nothing ), _ ) ->
            ( ( b, b ), ( plane.y.min, plane.y.max ) )

          -- ONLY Y
          ( ( Nothing, Nothing ), ( Just a, Just b ), _ ) ->
            ( ( plane.x.min, plane.x.min ), ( a, b ) )

          ( ( Nothing, Nothing ), ( Just a, Nothing ), _ ) ->
            ( ( plane.x.min, plane.x.max ), ( a, a ) )

          ( ( Nothing, Nothing ), ( Nothing, Just b ), _ ) ->
            ( ( plane.x.min, plane.x.max ), ( b, b ) )

          -- MIXED
          ( ( Nothing, Just c ), ( Just a, Just b ), _ ) ->
            ( ( c, c ), ( a, b ) )

          ( ( Just c, Nothing ), ( Just a, Just b ), _ ) ->
            ( ( c, c ), ( a, b ) )

          ( ( Just a, Just b ), ( Nothing, Just c ), _ ) ->
            ( ( a, b ), ( c, c ) )

          ( ( Just a, Just b ), ( Just c, Nothing ), _ ) ->
            ( ( a, b ), ( c, c ) )

          -- ONE FULL POINT
          ( ( Just a, Nothing ), ( Nothing, Just b ), ( 0, 0 ) ) ->
            ( ( a, plane.x.max ), ( b, b ) )

          ( ( Just a, Nothing ), ( Nothing, Just b ), ( xOff, yOff ) ) ->
            ( ( a, a + Coord.scaleCartesianX plane config.xOff ), ( b, b + Coord.scaleCartesianY plane config.yOff ) )

          ( ( Just a, Nothing ), ( Just b, Nothing ), ( 0, 0 ) ) ->
            ( ( a, plane.x.max ), ( b, b ) )

          ( ( Just a, Nothing ), ( Just b, Nothing ), ( xOff, yOff ) ) ->
            ( ( a, a + Coord.scaleCartesianX plane config.xOff ), ( b, b + Coord.scaleCartesianY plane config.yOff ) )

          ( ( Nothing, Just a ), ( Nothing, Just b ), ( 0, 0 ) ) ->
            ( ( a, plane.x.max ), ( b, b ) )

          ( ( Nothing, Just a ), ( Nothing, Just b ), ( xOff, yOff ) ) ->
            ( ( a, a + Coord.scaleCartesianX plane config.xOff ), ( b, b + Coord.scaleCartesianY plane config.yOff ) )

          ( ( Nothing, Just a ), ( Just b, Nothing ), ( 0, 0 ) ) ->
            ( ( a, plane.x.max ), ( b, b ) )

          ( ( Nothing, Just a ), ( Just b, Nothing ), ( xOff, yOff ) ) ->
            ( ( a, a + Coord.scaleCartesianX plane config.xOff ), ( b, b + Coord.scaleCartesianY plane config.yOff ) )

          -- NEITHER
          ( ( Nothing, Nothing ), ( Nothing, Nothing ), _ ) ->
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
        ] ++
        if config.break
        then [ C.Line x1_ y2_, C.Line x2_ y2_ ]
        else [ C.Line x2_ y2_ ]
  in
  S.path
    [ SA.class "elm-charts__line"
    , SA.fill "transparent"
    , SA.stroke config.color
    , SA.strokeWidth (String.fromFloat config.width)
    , SA.strokeOpacity (String.fromFloat config.opacity)
    , SA.strokeDasharray (String.join " " <| List.map String.fromFloat config.dashed)
    , SA.d (C.description plane cmds)
    ]
    []



{-| -}
type alias Rect =
  { x1 : Maybe Float
  , x2 : Maybe Float
  , y1 : Maybe Float
  , y2 : Maybe Float
  , color : String
  , border : String
  , borderWidth : Float
  , opacity : Float
  }


{-| -}
rect : Plane -> List (CA.Attribute Rect) -> Svg msg
rect plane edits =
  let config =
        apply edits
          { x1 = Nothing
          , x2 = Nothing
          , y1 = Nothing
          , y2 = Nothing
          , color = "rgba(210, 210, 210, 0.5)"
          , border = "rgba(210, 210, 210, 1)"
          , borderWidth = 1
          , opacity = 1
          }

      ( ( x1_, x2_ ), ( y1_, y2_ ) ) =
        case ( ( config.x1, config.x2 ), ( config.y1, config.y2 ) ) of
          -- ONLY X
          ( ( Just a, Just b ), ( Nothing, Nothing ) ) ->
            ( ( a, b ), ( plane.y.min, plane.y.max ) )

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
        , C.Line x2_ y1_
        , C.Line x2_ y2_
        , C.Line x1_ y2_
        , C.Line x1_ y1_
        ]
  in
  S.path
    [ SA.class "elm-charts__rect"
    , SA.fill config.color
    , SA.fillOpacity (String.fromFloat config.opacity)
    , SA.stroke config.border
    , SA.strokeWidth (String.fromFloat config.borderWidth)
    , SA.d (C.description plane cmds)
    ]
    []



-- LEGEND


type alias Legends msg =
  { alignment : CA.Alignment
  , anchor : Maybe CA.Anchor
  , spacing : Float
  , htmlAttrs : List (H.Attribute msg)
  }


legendsAt : Plane -> Float -> Float -> Float -> Float -> List (CA.Attribute (Legends msg)) -> List (Html msg) -> Html msg
legendsAt plane x y xOff yOff edits children =
  let config =
        apply edits
          { alignment = CA.Row
          , anchor = Nothing
          , spacing = 10
          , htmlAttrs = []
          }

      ( alignmentAttrs, direction ) =
        case config.alignment of
          CA.Row ->
            ( [ HA.style "display" "flex"
              , HA.style "align-items" "center"
              ]
            , "right"
            )

          CA.Column ->
            ( [ HA.style "display" "flex"
              , HA.style "flex-direction" "column"
              , HA.style "align-items" "baseline"
              ]
            , "bottom"
            )

      classAttrs =
        [ HA.class "elm-charts__legends" ]

      paddingStyle =
        """ .elm-charts__legends .elm-charts__legend {
              margin-""" ++ direction ++ """:""" ++ String.fromFloat config.spacing ++ """px;
            }

            .elm-charts__legends .elm-charts__legend:last-child {
              margin-""" ++ direction ++ """: 0px;
            }
        """
      anchorAttrs =
        case config.anchor of
          Nothing -> [ HA.style "transform" "translate(-0%, 0%)" ]
          Just CA.End -> [ HA.style "transform" "translate(-100%, 0%)" ]
          Just CA.Start -> [ HA.style "transform" "translate(-0%, 0%)" ]
          Just CA.Middle -> [ HA.style "transform" "translate(-50%, 0%)" ]
  in
  positionHtml plane x y xOff yOff
    (anchorAttrs ++ alignmentAttrs ++ classAttrs ++ config.htmlAttrs)
    (H.node "style" [] [ H.text paddingStyle ] :: children)



-- LEGEND



type alias Legend msg =
  { xOff : Float
  , yOff : Float
  , width : Float
  , height : Float
  , fontSize : Maybe Int
  , color : String
  , spacing : Float
  , title : String
  , htmlAttrs : List (H.Attribute msg)
  }


barLegend : List (CA.Attribute (Legend msg)) -> List (CA.Attribute Bar) ->  Html msg
barLegend edits barAttrs =
  let config =
        apply edits
          { xOff = 0
          , yOff = 0
          , width = 10
          , height = 10
          , fontSize = Nothing
          , color = "#808BAB"
          , spacing = 10
          , title = ""
          , htmlAttrs = []
          }

      fakePlane =
        { width = config.width
        , height = config.height
        , margin = Coord.Margin 0 0 0 0
        , x = Coord.Axis 0 10 0 10
        , y = Coord.Axis 0 10 0 10
        }

      fontStyle =
        case config.fontSize of
          Just size_ -> HA.style "font-size" (String.fromInt size_ ++ "px")
          Nothing -> HA.style "" ""
  in
  H.div
    ([ HA.class "elm-charts__legend"
    , HA.style "display" "flex"
    , HA.style "align-items" "center"
    ] ++ config.htmlAttrs)
    [ container fakePlane [ CA.static ]
        []
        [ bar fakePlane barAttrs { x1 = 0, y1 = 0, x2 = 10, y2 = 10 }
        ]
        []
    , H.div
        [ fontStyle
        , HA.style "margin-left" (String.fromFloat config.spacing ++ "px")
        ]
        [ H.text config.title ]
    ]


lineLegend : List (CA.Attribute (Legend msg)) -> List (CA.Attribute Interpolation) -> List (CA.Attribute Dot) -> Html msg
lineLegend edits interAttrsOrg dotAttrsOrg =
  let config =
        apply edits
          { xOff = 0
          , yOff = 0
          , width = 30
          , height = 16
          , fontSize = Nothing
          , color = "#808BAB"
          , spacing = 10
          , title = ""
          , htmlAttrs = []
          }

      ( dotAttrs, interAttrs ) =
        if List.isEmpty interAttrsOrg then ( CA.circle :: dotAttrsOrg, CA.opacity 0 :: interAttrsOrg )
        else if List.isEmpty dotAttrsOrg then ( dotAttrsOrg, CA.linear :: CA.opacity 0 :: interAttrsOrg )
        else ( dotAttrsOrg, CA.opacity 0 :: interAttrsOrg )

      dotConfig =
        apply dotAttrs
          { color = Helpers.blue
          , opacity = 1
          , size = 6
          , border = "white"
          , borderWidth = 1
          , aura = 0
          , auraWidth = 10
          , shape = Nothing
          }

      interConfig =
        apply interAttrs
          { method = Nothing
          , color = Helpers.blue
          , width = 1
          , opacity = 0
          , design = Nothing
          , dashed = []
          }

      topMargin =
        case dotConfig.shape of
          Just shape -> toRadius dotConfig.size shape
          Nothing -> 0

      bottomMargin =
        if interConfig.opacity == 0 then topMargin else 0

      fakePlane =
        { width = config.width
        , height = config.height
        , margin = Coord.Margin 0 0 0 0
        , x = Coord.Axis 0 10 0 10
        , y = Coord.Axis 0 10 0 10
        }

      fontStyle =
        case config.fontSize of
          Just size_ -> HA.style "font-size" (String.fromInt size_ ++ "px")
          Nothing -> HA.style "" ""
  in
  H.div
    ([ HA.class "elm-charts__legend"
    , HA.style "display" "flex"
    , HA.style "align-items" "center"
    ] ++ config.htmlAttrs)
    [ container fakePlane [ CA.static ]
        []
        [ interpolation fakePlane .x (.y >> Just) interAttrs [ Point 0 5, Point 10 5 ]
        , area fakePlane .x Nothing (.y >> Just) interAttrs [ Point 0 5, Point 10 5 ]
        , dot fakePlane .x .y dotAttrs (Point 5 5)
        ]
        []
    , H.div
        [ fontStyle
        , HA.style "margin-left" (String.fromFloat config.spacing ++ "px")
        ]
        [ H.text config.title ]
    ]



-- LABEL


{-| -}
type alias Label =
  { xOff : Float
  , yOff : Float
  , border : String
  , borderWidth : Float
  , fontSize : Maybe Int
  , color : String
  , anchor : Maybe CA.Anchor
  , rotate : Float
  }


{-| -}
label : Plane -> List (CA.Attribute Label) -> List (Svg msg) -> Point -> Svg msg
label plane edits inner point =
  let config =
        apply edits
          { xOff = 0
          , yOff = 0
          , border = "white"
          , borderWidth = 0.1
          , fontSize = Nothing
          , color = "#808BAB"
          , anchor = Nothing
          , rotate = 0
          }

      fontStyle =
        case config.fontSize of
          Just size_ -> "font-size: " ++ String.fromInt size_ ++ ";"
          Nothing -> ""

      anchorStyle =
        case config.anchor of
          Nothing -> "text-anchor: middle;"
          Just CA.End -> "text-anchor: end;"
          Just CA.Start -> "text-anchor: start;"
          Just CA.Middle -> "text-anchor: middle;"
  in
  S.text_
    [ SA.class "elm-charts__label"
    , SA.stroke config.border
    , SA.strokeWidth (String.fromFloat config.borderWidth)
    , SA.fill config.color
    , position plane -config.rotate point.x point.y config.xOff config.yOff
    , SA.style <| String.join " " [ "pointer-events: none;", fontStyle, anchorStyle ]
    ]
    [ S.tspan [] inner ]



-- ARROW


{-| -}
type alias Arrow =
  { xOff : Float
  , yOff : Float
  , color : String
  , width : Float
  , length : Float
  , rotate : Float
  }


{-| -}
arrow : Plane -> List (CA.Attribute Arrow) -> Point -> Svg msg
arrow plane edits point =
  let config =
        apply edits
          { xOff = 0
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
    , position plane 0 point.x point.y config.xOff config.yOff
    ]
    [ S.polygon
        [ SA.fill config.color
        , SA.points points_
        , SA.transform commands
        ]
        []
    ]



-- BAR


{-| -}
type alias Bar =
  { roundTop : Float
  , roundBottom : Float
  , color : String
  , border : String
  , borderWidth : Float
  , opacity : Float
  , design : Maybe CA.Design
  -- TODO aura
  }


{-| -}
bar : Plane -> List (CA.Attribute Bar) -> Position -> Svg msg
bar plane edits point =
  -- TODO round via clipPath
  let config =
        apply edits
          { roundTop = 0
          , roundBottom = 0
          , border = "white"
          , borderWidth = 0
          , color = Helpers.blue
          , opacity = 1
          , design = Nothing
          }

      x1_ = point.x1 + Coord.scaleCartesianX plane (config.borderWidth / 2)
      x2_ = point.x2 - Coord.scaleCartesianX plane (config.borderWidth / 2)
      y1_ = point.y1 + Coord.scaleCartesianY plane (config.borderWidth / 2)
      y2_ = point.y2 - Coord.scaleCartesianY plane (config.borderWidth / 2)

      x_ = x1_
      y_ = max y1_ y2_
      bs = min y1_ y2_
      w = x2_ - x_
      bT = Coord.scaleSVGX plane w * 0.5 * (clamp 0 1 config.roundTop)
      bB = Coord.scaleSVGX plane w * 0.5 * (clamp 0 1 config.roundBottom)
      ys = abs (Coord.scaleSVGY plane y_)
      rxT = Coord.scaleCartesianX plane bT
      ryT = Coord.scaleCartesianY plane bT
      rxB = Coord.scaleCartesianX plane bB
      ryB = Coord.scaleCartesianY plane bB

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
              , C.Line x_ bs
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

      actualBar fill =
        S.path
          [ SA.class "elm-charts__bar"
          , SA.fill fill
          , SA.fillOpacity (String.fromFloat config.opacity)
          , SA.stroke config.border
          , SA.strokeWidth (String.fromFloat config.borderWidth)
          , SA.d (C.description plane commands)
          , SA.style (clipperStyle plane (Coord.Position x1_ x2_ bs y_))
          ]
          []
  in
  case config.design of
    Nothing ->
      actualBar config.color

    Just design ->
      let ( patternDefs, fill ) = toPattern config.color design in
      S.g
        [ SA.class "elm-charts__bar-with-pattern" ]
        [ patternDefs
        , actualBar fill
        ]



-- SERIES


{-| -}
type alias Interpolation =
  { method : Maybe CA.Method
  , color : String
  , width : Float
  , opacity : Float
  , design : Maybe CA.Design
  , dashed : List Float
  }


{-| -}
interpolation : Plane -> (data -> Float) -> (data -> Maybe Float) -> List (CA.Attribute Interpolation) -> List data -> Svg msg
interpolation plane toX toY edits data =
  let config =
        apply edits
          { method = Nothing
          , color = Helpers.blue
          , width = 1
          , opacity = 0
          , design = Nothing
          , dashed = []
          }

      limits =
        Coord.fromProps [toX >> Just] [toY] data

      view ( first, cmds, _ ) =
        S.path
          [ SA.class "elm-charts__interpolation-section"
          , SA.fill "transparent"
          , SA.stroke config.color
          , SA.strokeDasharray (String.join " " <| List.map String.fromFloat config.dashed)
          , SA.strokeWidth (String.fromFloat config.width)
          , SA.d (C.description plane (Move first.x first.y :: cmds))
          , SA.style (clipperStyle plane limits)
          ]
          []
  in
  case config.method of
    Nothing -> S.text ""
    Just method ->
      S.g [ SA.class "elm-charts__interpolation-sections" ] <|
        List.map view (toCommands method toX toY data)


{-| -}
area : Plane -> (data -> Float) -> Maybe (data -> Maybe Float) -> (data -> Maybe Float) -> List (CA.Attribute Interpolation) -> List data -> Svg msg
area plane toX toY2M toY edits data =
  let config =
        apply edits
          { method = Nothing
          , color = Helpers.blue
          , width = 1
          , opacity = 0.2
          , design = Nothing
          , dashed = []
          }

      limits =
        Coord.fromProps [toX >> Just] [toY, Maybe.withDefault (always (Just 0)) toY2M] data

      ( patternDefs, fill ) =
        case config.design of
          Nothing -> ( S.text "", config.color )
          Just design -> toPattern config.color design

      view cmds =
        S.path
          [ SA.class "elm-charts__area-section"
          , SA.fill fill
          , SA.fillOpacity (String.fromFloat config.opacity)
          , SA.strokeWidth "0"
          , SA.fillRule "evenodd"
          , SA.d (C.description plane cmds)
          , SA.style (clipperStyle plane limits)
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
  if config.opacity <= 0 then S.text "" else
  case config.method of
    Nothing -> S.text ""
    Just method ->
      S.g [ SA.class "elm-charts__area-sections" ] <|
        case toY2M of
          Nothing -> patternDefs :: List.map withoutUnder (toCommands method toX toY data)
          Just toY2 -> patternDefs :: List.map2 withUnder (toCommands method toX toY2 data) (toCommands method toX toY data)


toCommands : CA.Method -> (data -> Float) -> (data -> Maybe Float) -> List data -> List ( Point, List C.Command, Point )
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
          CA.Linear -> Interpolation.linear points
          CA.Monotone -> Interpolation.monotone points
          CA.Stepped -> Interpolation.stepped points

      toSets ps cmds =
        withBorder ps <| \first last_ -> ( first, cmds, last_ )
  in
  List.map2 toSets points commands
    |> List.filterMap identity



-- PATTERN


toPattern : String -> CA.Design -> ( S.Svg msg, String )
toPattern defaultColor design =
  let toPatternId props =
        String.replace "(" "-" <|
        String.replace ")" "-" <|
        String.replace "." "-" <|
        String.replace "," "-" <|
        String.replace " " "-" <|
        String.join "-" <|
          [ "elm-charts__pattern"
          , case design of
              CA.Striped _ -> "striped"
              CA.Dotted _ -> "dotted"
              CA.Gradient _ -> "gradient"
          ] ++ props

      toPatternDefs id spacing rotate inside =
        S.defs []
          [ S.pattern
              [ SA.id id
              , SA.patternUnits "userSpaceOnUse"
              , SA.width (String.fromFloat spacing)
              , SA.height (String.fromFloat spacing)
              , SA.patternTransform ("rotate(" ++ String.fromFloat rotate ++ ")")
              ]
              [ inside ]
          ]

      ( patternDefs, patternId ) =
        case design of
          CA.Striped edits ->
            let config =
                  apply edits
                    { color = defaultColor
                    , width = 3
                    , spacing = 4
                    , rotate = 45
                    }

                theId =
                  toPatternId
                    [ config.color
                    , String.fromFloat config.width
                    , String.fromFloat config.spacing
                    , String.fromFloat config.rotate
                    ]
            in
            ( toPatternDefs theId config.spacing config.rotate <|
                S.line
                  [ SA.x1 "0"
                  , SA.y "0"
                  , SA.x2 "0"
                  , SA.y2 (String.fromFloat config.spacing)
                  , SA.stroke config.color
                  , SA.strokeWidth (String.fromFloat config.width)
                  ]
                  []
            , theId
            )


          CA.Dotted edits ->
            let config =
                  apply edits
                    { color = defaultColor
                    , width = 3
                    , spacing = 4
                    , rotate = 45
                    }

                theId =
                  toPatternId
                    [ config.color
                    , String.fromFloat config.width
                    , String.fromFloat config.spacing
                    , String.fromFloat config.rotate
                    ]
            in
            ( toPatternDefs theId config.spacing config.rotate <|
                S.circle
                  [ SA.fill config.color
                  , SA.cx (String.fromFloat <| config.width / 3)
                  , SA.cy (String.fromFloat <| config.width / 3)
                  , SA.r (String.fromFloat <| config.width / 3)
                  ]
                  []
            , theId
            )

          CA.Gradient edits ->
            let config =
                  apply edits
                    { colors = [ defaultColor, "white" ] }

                theId = toPatternId config.colors
                totalColors = List.length config.colors
                toPercentage i = toFloat i * 100 / toFloat (totalColors - 1)
                toStop i c =
                  S.stop
                    [ SA.offset (String.fromFloat (toPercentage i) ++ "%")
                    , SA.stopColor c
                    ]
                    []
            in
            ( S.defs []
                [ S.linearGradient
                    [ SA.id theId, SA.x1 "0", SA.x2 "0", SA.y1 "0", SA.y2 "1" ]
                    (List.indexedMap toStop config.colors)
                ]
            , theId
            )
  in
  ( patternDefs, "url(#" ++ patternId ++ ")" )




-- DOTS


{-| -}
type alias Dot =
  { color : String
  , opacity : Float
  , size : Float
  , border : String
  , borderWidth : Float
  , aura : Float
  , auraWidth : Float
  , shape : Maybe CA.Shape
  }


{-| -}
dot : Plane -> (data -> Float) -> (data -> Float) -> List (CA.Attribute Dot) -> data -> Svg msg
dot plane toX toY edits datum_ =
  let config =
        apply edits
          { color = Helpers.blue
          , opacity = 1
          , size = 6
          , border = ""
          , borderWidth = 0
          , aura = 0
          , auraWidth = 5
          , shape = Nothing
          }

      x_ = Coord.toSVGX plane (toX datum_)
      y_ = Coord.toSVGY plane (toY datum_)
      area_ = 2 * pi * config.size

      styleAttrs =
        [ SA.stroke (if config.border == "" then config.color else config.border)
        , SA.strokeWidth (String.fromFloat config.borderWidth)
        , SA.fillOpacity (String.fromFloat config.opacity)
        , SA.fill config.color
        , SA.class "elm-charts__dot"
        ]

      auraAttrs =
        [ SA.stroke config.color
        , SA.strokeWidth (String.fromFloat config.auraWidth)
        , SA.strokeOpacity (String.fromFloat config.aura)
        , SA.fill "transparent"
        , SA.class "elm-charts__dot-aura"
        ]

      view toEl auraOff toAttrs =
        if config.aura > 0 then
          S.g
            [ SA.class "elm-charts__dot-container" ]
            [ toEl (toAttrs auraOff ++ auraAttrs) []
            , toEl (toAttrs 0 ++ styleAttrs) []
            ]
        else
          toEl (toAttrs 0 ++ styleAttrs) []
  in
  if not (isWithinPlane plane (toX datum_) (toY datum_)) then S.text "" else
  case config.shape of
    Nothing ->
      S.text ""

    Just CA.Circle ->
      view S.circle (config.auraWidth / 2) <| \off ->
        let radius = sqrt (area_ / pi) in
        [ SA.cx (String.fromFloat x_)
        , SA.cy (String.fromFloat y_)
        , SA.r (String.fromFloat (radius + off))
        ]

    Just CA.Triangle ->
      view S.path config.auraWidth <| \off ->
        [ SA.d (trianglePath area_ off x_ y_) ]

    Just CA.Square ->
      view S.rect config.auraWidth <| \off ->
        let side = sqrt area_
            sideOff = side + off
        in
        [ SA.x <| String.fromFloat (x_ - sideOff / 2)
        , SA.y <| String.fromFloat (y_ - sideOff / 2)
        , SA.width (String.fromFloat sideOff)
        , SA.height (String.fromFloat sideOff)
        ]

    Just CA.Diamond ->
      view S.rect config.auraWidth <| \off ->
        let side = sqrt area_
            sideOff = side + off
        in
        [ SA.x <| String.fromFloat (x_ - sideOff / 2)
        , SA.y <| String.fromFloat (y_ - sideOff / 2)
        , SA.width (String.fromFloat sideOff)
        , SA.height (String.fromFloat sideOff)
        , SA.transform ("rotate(45 " ++ String.fromFloat x_ ++ " " ++ String.fromFloat y_ ++ ")")
        ]

    Just CA.Cross ->
      view S.path config.auraWidth <| \off ->
        [ SA.d (plusPath area_ off x_ y_)
        , SA.transform ("rotate(45 " ++ String.fromFloat x_ ++ " " ++ String.fromFloat y_ ++ ")")
        ]

    Just CA.Plus ->
      view S.path config.auraWidth <| \off ->
        [ SA.d (plusPath area_ off x_ y_) ]


toRadius : Float -> CA.Shape -> Float
toRadius size_ shape =
  let area_ = 2 * pi * size_ in
  case shape of
    CA.Circle   -> sqrt (area_ / pi)
    CA.Triangle -> let side = sqrt <| area_ * 4 / (sqrt 3) in (sqrt 3) * side
    CA.Square   -> sqrt area_ / 2
    CA.Diamond  -> sqrt area_ / 2
    CA.Cross    -> sqrt (area_ / 4)
    CA.Plus     -> sqrt (area_ / 4)


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
  let side = sqrt (area_ / 4) + off
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



-- TOOLTIP


{-| -}
type alias Tooltip =
  { direction : Maybe CA.Direction
  , focal : Maybe (Position -> Position)
  , height : Float
  , width : Float
  , offset : Float
  , arrow : Bool
  , border : String
  , background : String
  }


{-| -}
tooltip : Plane -> Position -> List (CA.Attribute Tooltip) -> List (H.Attribute Never) -> List (H.Html Never) -> H.Html msg
tooltip plane pos edits htmlAttrs content =
  let config =
        apply edits
          { direction = Nothing
          , focal = Nothing
          , height = 0
          , width = 0
          , offset = 8
          , arrow = True
          , border = "#D8D8D8"
          , background = "white"
          }

      distanceTop = Coord.toSVGY plane pos.y2
      distanceBottom = plane.height - Coord.toSVGY plane pos.y1
      distanceLeft = Coord.toSVGX plane pos.x2
      distanceRight = plane.width - Coord.toSVGX plane pos.x1

      direction =
        case config.direction of
          Just CA.LeftOrRight ->
            if config.width > 0
            then if distanceLeft > (config.width + config.offset) then CA.Left else CA.Right
            else if distanceLeft > distanceRight then CA.Left else CA.Right

          Just CA.TopOrBottom ->
            if config.height > 0
            then if distanceTop > (config.height + config.offset) then CA.Top else CA.Bottom
            else if distanceTop > distanceBottom then CA.Top else CA.Bottom

          Just dir ->
            dir

          Nothing ->
            let isLargest a = List.all (\b -> a >= b) in
            if isLargest distanceTop [ distanceBottom, distanceLeft, distanceRight ] then CA.Top
            else if isLargest distanceBottom [ distanceTop, distanceLeft, distanceRight ] then CA.Bottom
            else if isLargest distanceLeft [ distanceTop, distanceBottom, distanceRight ] then CA.Left
            else CA.Right

      arrowWidth =
        if config.arrow then 4 else 0

      { xOff, yOff, transformation, className } =
        case direction of
          CA.Top         -> { xOff = 0, yOff = config.offset + arrowWidth, transformation = "translate(-50%, -100%)", className = "elm-charts__tooltip-top" }
          CA.Bottom      -> { xOff = 0, yOff = -config.offset - arrowWidth, transformation = "translate(-50%, 0%)", className = "elm-charts__tooltip-bottom" }
          CA.Left        -> { xOff = -config.offset - arrowWidth, yOff = 0, transformation = "translate(-100%, -50%)", className = "elm-charts__tooltip-left" }
          CA.Right       -> { xOff = config.offset + arrowWidth, yOff = 0, transformation = "translate(0, -50%)", className = "elm-charts__tooltip-right" }
          CA.LeftOrRight -> { xOff = -config.offset - arrowWidth, yOff = 0, transformation = "translate(0, -50%)", className = "elm-charts__tooltip-leftOrRight" }
          CA.TopOrBottom -> { xOff = 0, yOff = config.offset + arrowWidth, transformation =  "translate(-50%, -100%)", className = "elm-charts__tooltip-topOrBottom" }

      children =
        if config.arrow then
          H.node "style" [] [ H.text (tooltipPointerStyle direction className config.background config.border) ] :: content
        else
          content

      attributes =
        [ HA.class className
        , HA.style "transform" transformation
        , HA.style "padding" "5px 8px"
        , HA.style "background" config.background
        , HA.style "border" ("1px solid " ++ config.border)
        , HA.style "border-radius" "3px"
        , HA.style "pointer-events" "none"
        ] ++ htmlAttrs

      focalPoint =
        case config.focal of
          Just focal ->
            case direction of
              CA.Top         -> Coord.top (focal pos)
              CA.Bottom      -> Coord.bottom (focal pos)
              CA.Left        -> Coord.left (focal pos)
              CA.Right       -> Coord.right (focal pos)
              CA.LeftOrRight -> Coord.left (focal pos)
              CA.TopOrBottom -> Coord.right (focal pos)

          Nothing ->
            case direction of
              CA.Top         -> Coord.top pos
              CA.Bottom      -> Coord.bottom pos
              CA.Left        -> Coord.left pos
              CA.Right       -> Coord.right pos
              CA.LeftOrRight -> Coord.left pos
              CA.TopOrBottom -> Coord.right pos
  in
  positionHtml plane focalPoint.x focalPoint.y xOff yOff attributes children
    |> H.map never


{-| -}
positionHtml : Plane -> Float -> Float -> Float -> Float -> List (H.Attribute msg) -> List (H.Html msg) -> H.Html msg
positionHtml plane x y xOff yOff attrs content =
    let
        xPercentage = (Coord.toSVGX plane x + xOff) * 100 / plane.width
        yPercentage = (Coord.toSVGY plane y + -yOff) * 100 / plane.height

        posititonStyles =
          [ HA.style "left" (String.fromFloat xPercentage ++ "%")
          , HA.style "top" (String.fromFloat yPercentage ++ "%")
          , HA.style "margin-right" "-400px"
          , HA.style "position" "absolute"
          ]
    in
    H.div (posititonStyles ++ attrs) content



-- EVENTS


{-| -}
getNearest : (a -> Position) -> List a -> Plane -> Point -> List a
getNearest toPosition items plane searchedSvg =
  let searched =
        { x = Coord.toCartesianX plane searchedSvg.x
        , y = Coord.toCartesianY plane searchedSvg.y
        }
  in
  getNearestHelp toPosition items plane searched


{-| -}
getWithin : Float -> (a -> Position) -> List a -> Plane -> Point -> List a
getWithin radius toPosition items plane searchedSvg =
    let toPoint i =
          closestPoint (toPosition i) searched

        searched =
          { x = Coord.toCartesianX plane searchedSvg.x
          , y = Coord.toCartesianY plane searchedSvg.y
          }

        keepIfEligible closest =
          withinRadius plane radius searched (toPoint closest)
    in
    getNearestHelp toPosition items plane searched
      |> List.filter keepIfEligible


{-| -}
getNearestX : (a -> Position) -> List a -> Plane -> Point -> List a
getNearestX toPosition items plane searchedSvg =
    let searched =
          { x = Coord.toCartesianX plane searchedSvg.x
          , y = Coord.toCartesianY plane searchedSvg.y
          }
    in
    getNearestXHelp toPosition items plane searched


{-| -}
getWithinX : Float -> (a -> Position) -> List a -> Plane -> Point -> List a
getWithinX radius toPosition items plane searchedSvg =
    let toPoint i =
          closestPoint (toPosition i) searched

        searched =
          { x = Coord.toCartesianX plane searchedSvg.x
          , y = Coord.toCartesianY plane searchedSvg.y
          }

        keepIfEligible =
            withinRadiusX plane radius searched << toPoint
    in
    getNearestXHelp toPosition items plane searched
      |> List.filter keepIfEligible


getNearestHelp : (a -> Position) -> List a -> Plane -> Point -> List a
getNearestHelp toPosition items plane searched =
  let toPoint i =
        closestPoint (toPosition i) searched

      distance_ =
          distance plane searched

      getClosest item allClosest =
        case List.head allClosest of
          Just closest ->
            if toPoint closest == toPoint item then item :: allClosest
            else if distance_ (toPoint closest) > distance_ (toPoint item) then [ item ]
            else allClosest

          Nothing ->
            [ item ]
  in
  List.foldl getClosest [] items
    |> keepOne toPosition


getNearestXHelp : (a -> Position) -> List a -> Plane -> Point -> List a
getNearestXHelp toPosition items plane searched =
  let toPoint i =
        closestPoint (toPosition i) searched

      distanceX_ =
          distanceX plane searched

      getClosest item allClosest =
        case List.head allClosest of
          Just closest ->
              if (toPoint closest).x == (toPoint item).x then item :: allClosest
              else if distanceX_ (toPoint closest) > distanceX_ (toPoint item) then [ item ]
              else allClosest

          Nothing ->
            [ item ]
  in
  List.foldl getClosest [] items
    |> keepOne toPosition


distanceX : Plane -> Point -> Point -> Float
distanceX plane searched point =
    abs <| Coord.toSVGX plane point.x - Coord.toSVGX plane searched.x


distanceY : Plane -> Point -> Point -> Float
distanceY plane searched point =
    abs <| Coord.toSVGY plane point.y - Coord.toSVGY plane searched.y


distance : Plane -> Point -> Point -> Float
distance plane searched point =
    sqrt <| distanceX plane searched point ^ 2 + distanceY plane searched point ^ 2


closestPoint : Position -> Point -> Point
closestPoint pos searched =
  { x = clamp pos.x1 pos.x2 searched.x
  , y = clamp pos.y1 pos.y2 searched.y
  }


withinRadius : Plane -> Float -> Point -> Point -> Bool
withinRadius plane radius searched point =
    distance plane searched point <= radius


withinRadiusX : Plane -> Float -> Point -> Point -> Bool
withinRadiusX plane radius searched point =
    distanceX plane searched point <= radius


keepOne : (a -> Position) -> List a -> List a
keepOne toPosition =
  let func one acc =
        case List.head acc of
          Nothing -> [ one ]
          Just other ->
            if toPosition other == toPosition one then
              other :: acc
            else if toArea other > toArea one then
              [ one ]
            else
              acc

      toArea a =
        toPosition a |> \pos ->
          (pos.x1 - pos.x2) * (pos.y1 - pos.y2)
  in
  List.foldr func []


{-| -}
decoder : Plane -> (Plane -> Point -> msg) -> Json.Decoder msg
decoder plane toMsg =
  let
    handle mouseX mouseY box =
      let
        widthPercent = box.width / plane.width
        heightPercent = box.height / plane.height

        xPrev = plane.x
        yPrev = plane.y

        newPlane =
          { plane
          | width = box.width
          , height = box.height
          , margin =
              { top = plane.margin.top * heightPercent
              , right = plane.margin.right * widthPercent
              , left = plane.margin.left * widthPercent
              , bottom = plane.margin.bottom * heightPercent
              }
          }
      in
      toMsg newPlane { x = mouseX - box.left, y = mouseY - box.top }
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


position : Plane -> Float -> Float -> Float -> Float -> Float -> S.Attribute msg
position plane rotation x_ y_ xOff_ yOff_ =
  SA.transform <| "translate(" ++ String.fromFloat (Coord.toSVGX plane x_ + xOff_) ++ "," ++ String.fromFloat (Coord.toSVGY plane y_ + yOff_) ++ ") rotate(" ++ String.fromFloat rotation ++ ")"



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


isWithinPlane : Plane -> Float -> Float -> Bool
isWithinPlane plane x y =
  clamp plane.x.min plane.x.max x == x && clamp plane.y.min plane.y.max y == y



-- STYLES


tooltipPointerStyle : CA.Direction -> String -> String -> String -> String
tooltipPointerStyle direction className background borderColor =
  let config =
        case direction of
          CA.Top          -> { a = "right", b = "top", c = "left" }
          CA.Bottom       -> { a = "right", b = "bottom", c = "left" }
          CA.Left         -> { a = "bottom", b = "left", c = "top" }
          CA.Right        -> { a = "bottom", b = "right", c = "top" }
          CA.LeftOrRight  -> { a = "bottom", b = "left", c = "top" }
          CA.TopOrBottom  -> { a = "right", b = "top", c = "left" }
  in
  """
  .""" ++ className ++ """:before, .""" ++ className ++ """:after {
    content: "";
    position: absolute;
    border-""" ++ config.c ++ """: 5px solid transparent;
    border-""" ++ config.a ++ """: 5px solid transparent;
    """ ++ config.b ++ """: 100%;
    """ ++ config.c ++ """: 50%;
    margin-""" ++ config.c ++ """: -5px;
  }

  .""" ++ className ++ """:after {
    border-""" ++ config.b ++ """: 5px solid """ ++ background ++ """;
    margin-""" ++ config.b ++ """: -1px;
    z-index: 1;
  }

  .""" ++ className ++ """:before {
    border-""" ++ config.b ++ """: 5px solid """ ++ borderColor ++ """;
  }
  """


clipperStyle : Plane -> Coord.Position -> String
clipperStyle plane limits =
  let x1 = plane.x.min - limits.x1
      y1 = limits.y2 - plane.y.max
      x2 = x1 + abs (plane.x.max - plane.x.min)
      y2 = y1 + abs (plane.y.max - plane.y.min)

      path =
        String.join " "
          [ "M" ++ String.fromFloat (Coord.scaleSVGX plane x1) ++ " " ++ String.fromFloat (Coord.scaleSVGY plane y1)
          , "V" ++ String.fromFloat (Coord.scaleSVGY plane y2)
          , "H" ++ String.fromFloat (Coord.scaleSVGX plane x2)
          , "V" ++ String.fromFloat (Coord.scaleSVGY plane y1)
          , "H" ++ String.fromFloat (Coord.scaleSVGY plane x1)
          ]
  in
  "clip-path: path('" ++ path ++ "');"




-- INTERVALS


type Generator a
  = Generator (Int -> Coord.Axis -> List a)


floats : Generator Float
floats =
  Generator (\i b -> I.floats (I.around i) { min = b.min, max = b.max })


ints : Generator Int
ints =
  Generator (\i b -> I.ints (I.around i) { min = b.min, max = b.max })


times : Time.Zone -> Generator I.Time
times zone =
  Generator (\i b -> I.times zone i { min = b.min, max = b.max })


generate : Int -> Generator a -> Coord.Axis -> List a
generate amount (Generator func) limits =
  func amount limits


type alias TickValue =
  { value : Float
  , label : String
  }


toTickValues : (a -> Float) -> (a -> String) -> List a -> List TickValue
toTickValues toValue toString =
  List.map <| \i -> { value = toValue i, label = toString i }



-- FORMATTING


formatTime : Time.Zone -> I.Time -> String
formatTime zone time =
    case Maybe.withDefault time.unit time.change of
        I.Millisecond ->
            formatClockMillis zone time.timestamp

        I.Second ->
            formatClockSecond zone time.timestamp

        I.Minute ->
            formatClock zone time.timestamp

        I.Hour ->
            formatClock zone time.timestamp

        I.Day ->
            if time.multiple == 7
            then formatWeekday zone time.timestamp
            else formatDate zone time.timestamp

        I.Month ->
            formatMonth zone time.timestamp

        I.Year ->
            formatYear zone time.timestamp


formatFullTime : Time.Zone -> Time.Posix -> String
formatFullTime =
    F.format
        [ F.monthNumber
        , F.text "/"
        , F.dayOfMonthNumber
        , F.text "/"
        , F.yearNumberLastTwo
        , F.text " "
        , F.hourMilitaryFixed
        , F.text ":"
        , F.minuteFixed
        ]


formatFullDate : Time.Zone -> Time.Posix -> String
formatFullDate =
    F.format
        [ F.monthNumber
        , F.text "/"
        , F.dayOfMonthNumber
        , F.text "/"
        , F.yearNumberLastTwo
        ]


formatDate : Time.Zone -> Time.Posix -> String
formatDate =
    F.format
        [ F.monthNumber
        , F.text "/"
        , F.dayOfMonthNumber
        ]


formatClock : Time.Zone -> Time.Posix -> String
formatClock =
    F.format
        [ F.hourMilitaryFixed
        , F.text ":"
        , F.minuteFixed
        ]


formatClockSecond : Time.Zone -> Time.Posix -> String
formatClockSecond =
    F.format
        [ F.hourMilitaryFixed
        , F.text ":"
        , F.minuteFixed
        , F.text ":"
        , F.secondFixed
        ]


formatClockMillis : Time.Zone -> Time.Posix -> String
formatClockMillis =
    F.format
        [ F.hourMilitaryFixed
        , F.text ":"
        , F.minuteFixed
        , F.text ":"
        , F.secondFixed
        , F.text ":"
        , F.millisecondFixed
        ]


formatMonth : Time.Zone -> Time.Posix -> String
formatMonth =
    F.format
        [ F.monthNameAbbreviated
        ]


formatYear : Time.Zone -> Time.Posix -> String
formatYear =
    F.format
        [ F.yearNumber
        ]


formatWeekday : Time.Zone -> Time.Posix -> String
formatWeekday =
    F.format
        [ F.dayOfWeekNameFull ]



-- SYSTEM


type alias Plane =
  Coord.Plane


type alias Point =
  { x : Float
  , y : Float
  }


type alias Position =
  { x1 : Float
  , x2 : Float
  , y1 : Float
  , y2 : Float
  }


fromSvg : Plane -> Point -> Point
fromSvg plane point =
  { x = Coord.toCartesianX plane point.x
  , y = Coord.toCartesianY plane point.y
  }


fromCartesian : Plane -> Point -> Point
fromCartesian plane point =
  { x = Coord.toSVGX plane point.x
  , y = Coord.toSVGY plane point.y
  }


lengthInSvgX : Plane -> Float -> Float
lengthInSvgX =
  Coord.scaleSVGX


lengthInSvgY : Plane -> Float -> Float
lengthInSvgY =
  Coord.scaleSVGY


lengthInCartesianX : Plane -> Float -> Float
lengthInCartesianX =
  Coord.scaleCartesianX


lengthInCartesianY : Plane -> Float -> Float
lengthInCartesianY =
  Coord.scaleCartesianY
