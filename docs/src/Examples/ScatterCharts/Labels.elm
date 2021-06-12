module Examples.ScatterCharts.Labels exposing (..)


-- THIS IS A GENERATED MODULE!

import Html as H
import Svg as S
import Chart as C
import Chart.Attributes as CA
import Chart.Events as CE


view : Model -> H.Html Msg
view model =
  C.chart
    [ CA.height 300
    , CA.width 300
    , CA.paddingLeft 30
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.series .x
        [ C.property .y [] [ CA.opacity 0.2, CA.borderWidth 1 ]
            |> C.variation (\d -> [ CA.size (Maybe.withDefault 6 d.w * 30) ])
        ]
        data
    , C.eachProduct <| \p point ->
        let center = CE.getCenter p point
            label =
              (CE.getDatum point).w
                |> Maybe.map String.fromFloat
                |> Maybe.withDefault "N/A"
        in
        [ C.title
            [ CA.yOff 4
            , CA.color CA.pink
            ]
            [ S.text label ]
            center
        ]
    ]


meta =
  { category = "Scatter charts"
  , name = "Labels"
  , description = "Add labels to each dot."
  , order = 9
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
  , y : Maybe Float
  , z : Maybe Float
  , v : Maybe Float
  , w : Maybe Float
  , p : Maybe Float
  , q : Maybe Float
  }


data : List Datum
data =
  let toDatum x y z v w p q =
        Datum x (Just y) (Just z) (Just v) (Just w) (Just p) (Just q)
  in
  [ toDatum 0.6 2.0 4.0 4.6 6.9 7.3 8.0
  , toDatum 0.7 3.0 4.2 5.2 6.2 7.0 8.7
  , toDatum 0.8 4.0 4.6 5.5 5.2 7.2 8.1
  , toDatum 1.0 2.0 4.2 5.3 5.7 6.2 7.8
  , toDatum 1.2 5.0 3.5 4.9 5.9 6.7 8.2
  , toDatum 2.0 2.0 3.2 4.8 5.4 7.2 8.3
  , toDatum 2.3 1.0 4.3 5.3 5.1 7.8 7.1
  , toDatum 2.8 3.0 2.9 5.4 3.9 7.6 8.5
  , toDatum 3.0 2.0 3.6 5.8 4.6 6.5 6.9
  , toDatum 4.0 1.0 4.2 4.5 5.3 6.3 7.0
  ]



smallCode : String
smallCode =
  """
  C.chart
    [ CA.height 300
    , CA.width 300
    , CA.paddingLeft 30
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.series .x
        [ C.property .y [] [ CA.opacity 0.2, CA.borderWidth 1 ]
            |> C.variation (\\d -> [ CA.size (Maybe.withDefault 6 d.w * 30) ])
        ]
        data
    , C.eachProduct <| \\p point ->
        let center = CE.getCenter p point
            label =
              (CE.getDatum point).w
                |> Maybe.map String.fromFloat
                |> Maybe.withDefault "N/A"
        in
        [ C.title
            [ CA.yOff 4
            , CA.color CA.pink
            ]
            [ S.text label ]
            center
        ]
    ]
  """


largeCode : String
largeCode =
  """
import Html as H
import Svg as S
import Chart as C
import Chart.Attributes as CA
import Chart.Events as CE


view : Model -> H.Html Msg
view model =
  C.chart
    [ CA.height 300
    , CA.width 300
    , CA.paddingLeft 30
    ]
    [ C.grid []
    , C.xLabels []
    , C.yLabels []
    , C.series .x
        [ C.property .y [] [ CA.opacity 0.2, CA.borderWidth 1 ]
            |> C.variation (\\d -> [ CA.size (Maybe.withDefault 6 d.w * 30) ])
        ]
        data
    , C.eachProduct <| \\p point ->
        let center = CE.getCenter p point
            label =
              (CE.getDatum point).w
                |> Maybe.map String.fromFloat
                |> Maybe.withDefault "N/A"
        in
        [ C.title
            [ CA.yOff 4
            , CA.color CA.pink
            ]
            [ S.text label ]
            center
        ]
    ]
  """