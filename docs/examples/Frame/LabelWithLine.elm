module Examples.Frame.LabelWithLine exposing (..)

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
    , CA.paddingTop 25
    , CA.range [ CA.lowest 0 CA.exactly, CA.highest 10 CA.exactly ]
    , CA.domain [ CA.lowest 0 CA.exactly, CA.highest 10 CA.exactly ]
    ]
    [ C.grid []
    , C.xAxis []
    , C.xTicks []
    , C.xLabels []
    , C.yAxis []
    , C.yTicks []
    , C.yLabels []
    , C.series .age [ C.scatter .toys [] ] data

    , C.label
        [ CA.moveRight 14, CA.moveUp 8, CA.alignLeft ]
        [ S.text "The dot in question" ]
        { x = 5, y = 6 }
    , C.line
        [ CA.break
        , CA.x1 5, CA.y1 6
        , CA.xOff 10, CA.yOff 13
        , CA.color CA.pink
        ]
    ]
{-| @SMALL END -}


type alias Datum =
  { age : Float
  , toys : Maybe Float
  }

data : List Datum
data =
  [ Datum 5 (Just 6)
  ]


{-| @LARGE END -}


meta =
  { category = "Frame and navigation"
  , categoryOrder = 4
  , name = "Label with line"
  , description = "Add a label and line to chart."
  , order = 20
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
