module Examples.Frame.Dimensions exposing (..)

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
    , CA.paddingTop 0
    , CA.paddingRight 0
    , CA.range
        [ CA.lowest 5 CA.orLower
        , CA.highest 90 CA.orHigher
        ]
    , CA.domain
        [ CA.lowest 5 CA.orLower
        , CA.highest 100 CA.orHigher
        ]
    ]
    [ C.grid []
    , C.series .x
        [ C.interpolated .y [  ] [] ]
        [ { x = 10, y = Just 20 }
        , { x = 80, y = Just 80 }
        ]
    , C.xLabels [ CA.amount 10 ]
    , C.yLabels [ CA.amount 10 ]
    ]
{-| @SMALL END -}
{-| @LARGE END -}


meta =
  { category = "Navigation"
  , categoryOrder = 4
  , name = "Control dimensions"
  , description = "Limit or extend your range and domain."
  , order = 11
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

