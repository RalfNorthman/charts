module HighLevel exposing (..)

import Html
import Html.Attributes as HA
import Svg exposing (Svg, svg, g, circle, text_, text)
import Svg.Attributes exposing (width, height, stroke, fill, r, transform)
import Svg.Coordinates as Coordinates
import Chart as C
import Svg.Chart as SC
import Browser
import Time



main =
  Browser.sandbox
    { init = Model []
    , update = \msg model ->
        case msg of
          OnHover ps -> { model | hovering = ps }
          OnLeave -> { model | hovering = [] }

    , view = view
    }


type alias Model =
  { hovering : List (C.BarItem Float BarPoint)
  }


type Msg
  = OnHover (List (C.BarItem Float BarPoint))
  | OnLeave


type alias Point =
  { x : Float
  , y : Float
  , z : Float
  }


type alias BarPoint =
  { x : Float
  , y : Maybe Float
  , z : Maybe Float
  , label : String
  }


data : List BarPoint
data =
  [ { x = 0, y = Just 4, z = Just 4, label = "DK" }
  , { x = 4, y = Just 2, z = Just 2, label = "NO" }
  , { x = 6, y = Just 4, z = Just 5, label = "SE" }
  , { x = 8, y = Just 3, z = Just 7, label = "FI" }
  , { x = 10, y = Just 4, z = Just 3, label = "IS" }
  ]


data2 : List Point
data2 =
  [ { x = 1546300800000, y = 1, z = 4 }
  , { x = 1577840461000, y = 1, z = 5 }
  , { x = 1609462861000, y = 1, z = 3 }
  ]


view : Model -> Html.Html Msg
view model =
  C.chart
    [ C.width 600
    , C.height 300
    , C.marginTop 40
    , C.htmlAttrs
        [ HA.style "font-size" "12px"
        , HA.style "font-family" "monospace"
        , HA.style "margin" "20px 40px"
        , HA.style "max-width" "700px"
        ]
    , C.paddingLeft 10
    , C.init []
    , C.events
        [ C.barItem C.withoutUnknowns
            |> C.getNearestX
            |> C.map OnHover
            |> C.event "mousemove"
        ]
    ]
    [ C.grid []
    , C.bars
        [ C.tickLength 4
        , C.spacing 0.05
        , C.margin 0.1
        , C.binLabel .label
        , C.collectGroups
        ]
        [ C.bar .z [ C.barColor (\d -> C.pink), C.label "area" ]
        , C.bar .y [ C.barColor (\d -> C.blue), C.label "speed" ]
        ]
        data
    , C.yAxis []
    , C.yTicks []
    , C.xAxis []
    , C.yLabels []

    , C.whenNotEmpty model.hovering <| \bar rest ->
        C.tooltipOnTop (\_ -> bar.position.x) (\_ -> bar.position.y) [] <|
          [ tooltipRow bar ]
    ]


tooltipRow : C.BarItem Float BarPoint -> Html.Html msg
tooltipRow bar =
  Html.div [ HA.style "color" bar.metric.color ]
    [ Html.span [] [ Html.text bar.datum.label ]
    , Html.text " - "
    , Html.text bar.metric.label
    , Html.text " : "
    , Html.text (String.fromFloat bar.values.y)
    , Html.text " "
    , Html.text bar.metric.unit
    --, Html.span [] <|
    --    case maybeY of
    --      Just y -> [Html.text (String.fromFloat bar.values.y), Html.text " ", Html.text bar.metric.unit ]
    --      Nothing -> [Html.text "unknown"]
    ]
