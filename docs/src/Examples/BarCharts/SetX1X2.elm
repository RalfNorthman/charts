module Examples.BarCharts.SetX1X2 exposing (..)


-- THIS IS A GENERATED MODULE!

import Html as H
import Svg as S
import Chart as C
import Chart.Attributes as CA


view : Model -> H.Html Msg
view model =
  C.chart
    [ CA.height 300
    , CA.width 300
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.bars
        [ CA.x1 .x1
        , CA.x2 .x2
        ]
        [ C.bar .y []
        , C.bar .z []
        ]
        data
    ]

meta =
  { category = "Bar charts"
  , name = "Set x1 and x2"
  , description = "Change position of bar."
  , order = 2
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


type alias Datum =
  { x : Float
  , x1 : Float
  , x2 : Float
  , y : Maybe Float
  , z : Maybe Float
  , v : Maybe Float
  , w : Maybe Float
  , p : Maybe Float
  , q : Maybe Float
  }


data : List Datum
data =
  let toDatum x x1 y z v w p q =
        Datum x x1 y (Just y) (Just z) (Just v) (Just w) (Just p) (Just q)
  in
  [ toDatum 0.0 0.0 2.0 4.0 4.6 6.9 7.3 8.0
  , toDatum 2.0 2.0 3.0 4.2 5.3 5.7 6.2 7.8
  , toDatum 3.0 3.0 4.0 3.2 4.8 5.4 7.2 8.3
  , toDatum 4.0 4.0 5.0 3.0 4.1 5.5 7.9 8.1
  ]



smallCode : String
smallCode =
  """
  C.chart
    [ CA.height 300
    , CA.width 300
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.bars
        [ CA.x1 .x1
        , CA.x2 .x2
        ]
        [ C.bar .y []
        , C.bar .z []
        ]
        data
    ]
  """


largeCode : String
largeCode =
  """
import Html as H
import Svg as S
import Chart as C
import Chart.Attributes as CA


view : Model -> H.Html Msg
view model =
  C.chart
    [ CA.height 300
    , CA.width 300
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.bars
        [ CA.x1 .x1
        , CA.x2 .x2
        ]
        [ C.bar .y []
        , C.bar .z []
        ]
        data
    ]
  """