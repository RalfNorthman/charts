module Examples.Interactivity.ChangeUnit exposing (..)

{-| @LARGE -}
import Html as H
import Html.Attributes as HA
import Svg as S
import Chart as C
import Chart.Attributes as CA
import Chart.Events as CE
import Chart.Item as CI


type alias Model =
  { hovering : List (CI.Many Datum CI.Any) }


init : Model
init =
  { hovering = [] }


type Msg
  = OnHover (List (CI.Many Datum CI.Any))


update : Msg -> Model -> Model
update msg model =
  case msg of
    OnHover hovering ->
      { model | hovering = hovering }


view : Model -> H.Html Msg
view model =
{-| @SMALL -}
  C.chart
    [ CA.height 300
    , CA.width 300
    , CE.onMouseMove OnHover (CE.getNearest CI.stacks)
    , CE.onMouseLeave (OnHover [])
    ]
    [ C.xLabels []
    , C.yLabels [ CA.withGrid ]
    , C.bars []
        [ C.stacked
            [ C.bar .y [ CA.opacity 0.5, CA.borderWidth 1 ]
                |> C.format (\v -> String.fromFloat v ++ " m/s")
            , C.bar .z [ CA.opacity 0.5, CA.borderWidth 1 ]
                |> C.format (\v -> String.fromFloat v ++ " m/s")
            ]
        ]
        data
    , C.each model.hovering <| \p dot ->
        [ C.tooltip dot [ CA.onLeftOrRight ] [] [] ]
    ]
{-| @SMALL END -}
{-| @LARGE END -}


meta =
  { category = "Interactivity"
  , categoryOrder = 5
  , name = "Change value formatting"
  , description = "Change the value print in the tooltip."
  , order = 7
  }



type alias Datum =
  { x : Float
  , x1 : Float
  , y : Float
  , z : Float
  , v : Float
  , w : Float
  , p : Float
  , q : Float
  }


data : List Datum
data =
  [ Datum 0.0 0.0 1.2 4.0 4.6 6.9 7.3 8.0
  , Datum 1.0 0.3 2.5 3.1 5.1 4.9 5.3 7.0
  , Datum 2.0 0.4 2.2 4.2 5.3 5.7 6.2 7.8
  , Datum 3.0 0.6 1.0 3.2 4.8 5.4 7.2 8.3
  , Datum 4.0 0.2 1.2 3.0 4.1 5.5 7.9 8.1
  ]
