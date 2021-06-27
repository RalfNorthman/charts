module Examples.Frame.Padding exposing (..)

{-| @LARGE -}
import Html as H
import Svg as S
import Chart as C
import Chart.Attributes as CA


view : Model -> H.Html Msg
view model =
{-| @SMALL -}
  C.chart
    [ CA.height 300
    , CA.width 300
    , CA.paddingBottom 20
    , CA.paddingTop 20
    , CA.paddingLeft 20
    , CA.paddingRight 20
    ]
    [ C.grid []
    , C.xAxis []
    , C.yAxis []
    , C.series .x
        [ C.interpolated .y [  ] [] ]
        [ { x = 0, y = Just 0 }
        , { x = 10, y = Just 10 }
        ]
    , C.xLabels [ CA.pinned .min ]
    , C.yLabels [ CA.pinned .min ]
    ]
{-| @SMALL END -}
{-| @LARGE END -}


meta =
  { category = "Navigation"
  , categoryOrder = 4
  , name = "Padding"
  , description = "Add padding to frame."
  , order = 16
  }


type alias Model =
  ()


init : Model
init =
  ()


type Msg
  = Msg


update : Msg -> Model -> Model
update msg model =
  model

