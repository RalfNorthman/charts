module Examples exposing (Id, Model, init, Msg, update, view, name, all, first, smallCode, largeCode, meta)


-- THIS IS A GENERATED MODULE!

import Html
import Examples.BarCharts.Gradient
import Examples.BarCharts.Title
import Examples.BarCharts.TooltipStack
import Examples.BarCharts.Tooltip
import Examples.BarCharts.BarLabels
import Examples.BarCharts.Pattern
import Examples.BarCharts.SetX1X2
import Examples.BarCharts.Spacing
import Examples.BarCharts.DataDependent
import Examples.BarCharts.Color
import Examples.BarCharts.TooltipBin
import Examples.BarCharts.Corners
import Examples.BarCharts.Ungroup
import Examples.BarCharts.BinLabels
import Examples.BarCharts.Stacked
import Examples.BarCharts.Margin
import Examples.BarCharts.Borders
import Examples.BarCharts.Opacity
import Examples.BarCharts.Legends
import Examples.BarCharts.Basic
import Examples.LineCharts.Area
import Examples.LineCharts.Gradient
import Examples.LineCharts.Width
import Examples.LineCharts.TooltipStack
import Examples.LineCharts.Tooltip
import Examples.LineCharts.Montone
import Examples.LineCharts.Pattern
import Examples.LineCharts.Dots
import Examples.LineCharts.Dashed
import Examples.LineCharts.Color
import Examples.LineCharts.Stepped
import Examples.LineCharts.Stacked
import Examples.LineCharts.Labels
import Examples.LineCharts.Legends
import Examples.LineCharts.Basic
import Examples.ScatterCharts.Colors
import Examples.ScatterCharts.Shapes
import Examples.ScatterCharts.Highlight
import Examples.ScatterCharts.DataDependent
import Examples.ScatterCharts.Borders
import Examples.ScatterCharts.Opacity
import Examples.ScatterCharts.Sizes
import Examples.ScatterCharts.Basic


type Id
  = BarCharts__Gradient
  | BarCharts__Title
  | BarCharts__TooltipStack
  | BarCharts__Tooltip
  | BarCharts__BarLabels
  | BarCharts__Pattern
  | BarCharts__SetX1X2
  | BarCharts__Spacing
  | BarCharts__DataDependent
  | BarCharts__Color
  | BarCharts__TooltipBin
  | BarCharts__Corners
  | BarCharts__Ungroup
  | BarCharts__BinLabels
  | BarCharts__Stacked
  | BarCharts__Margin
  | BarCharts__Borders
  | BarCharts__Opacity
  | BarCharts__Legends
  | BarCharts__Basic
  | LineCharts__Area
  | LineCharts__Gradient
  | LineCharts__Width
  | LineCharts__TooltipStack
  | LineCharts__Tooltip
  | LineCharts__Montone
  | LineCharts__Pattern
  | LineCharts__Dots
  | LineCharts__Dashed
  | LineCharts__Color
  | LineCharts__Stepped
  | LineCharts__Stacked
  | LineCharts__Labels
  | LineCharts__Legends
  | LineCharts__Basic
  | ScatterCharts__Colors
  | ScatterCharts__Shapes
  | ScatterCharts__Highlight
  | ScatterCharts__DataDependent
  | ScatterCharts__Borders
  | ScatterCharts__Opacity
  | ScatterCharts__Sizes
  | ScatterCharts__Basic


type alias Model =
  { example0 : Examples.BarCharts.Gradient.Model
  , example1 : Examples.BarCharts.Title.Model
  , example2 : Examples.BarCharts.TooltipStack.Model
  , example3 : Examples.BarCharts.Tooltip.Model
  , example4 : Examples.BarCharts.BarLabels.Model
  , example5 : Examples.BarCharts.Pattern.Model
  , example6 : Examples.BarCharts.SetX1X2.Model
  , example7 : Examples.BarCharts.Spacing.Model
  , example8 : Examples.BarCharts.DataDependent.Model
  , example9 : Examples.BarCharts.Color.Model
  , example10 : Examples.BarCharts.TooltipBin.Model
  , example11 : Examples.BarCharts.Corners.Model
  , example12 : Examples.BarCharts.Ungroup.Model
  , example13 : Examples.BarCharts.BinLabels.Model
  , example14 : Examples.BarCharts.Stacked.Model
  , example15 : Examples.BarCharts.Margin.Model
  , example16 : Examples.BarCharts.Borders.Model
  , example17 : Examples.BarCharts.Opacity.Model
  , example18 : Examples.BarCharts.Legends.Model
  , example19 : Examples.BarCharts.Basic.Model
  , example20 : Examples.LineCharts.Area.Model
  , example21 : Examples.LineCharts.Gradient.Model
  , example22 : Examples.LineCharts.Width.Model
  , example23 : Examples.LineCharts.TooltipStack.Model
  , example24 : Examples.LineCharts.Tooltip.Model
  , example25 : Examples.LineCharts.Montone.Model
  , example26 : Examples.LineCharts.Pattern.Model
  , example27 : Examples.LineCharts.Dots.Model
  , example28 : Examples.LineCharts.Dashed.Model
  , example29 : Examples.LineCharts.Color.Model
  , example30 : Examples.LineCharts.Stepped.Model
  , example31 : Examples.LineCharts.Stacked.Model
  , example32 : Examples.LineCharts.Labels.Model
  , example33 : Examples.LineCharts.Legends.Model
  , example34 : Examples.LineCharts.Basic.Model
  , example35 : Examples.ScatterCharts.Colors.Model
  , example36 : Examples.ScatterCharts.Shapes.Model
  , example37 : Examples.ScatterCharts.Highlight.Model
  , example38 : Examples.ScatterCharts.DataDependent.Model
  , example39 : Examples.ScatterCharts.Borders.Model
  , example40 : Examples.ScatterCharts.Opacity.Model
  , example41 : Examples.ScatterCharts.Sizes.Model
  , example42 : Examples.ScatterCharts.Basic.Model
  }


init : Model
init =
  { example0 = Examples.BarCharts.Gradient.init
  , example1 = Examples.BarCharts.Title.init
  , example2 = Examples.BarCharts.TooltipStack.init
  , example3 = Examples.BarCharts.Tooltip.init
  , example4 = Examples.BarCharts.BarLabels.init
  , example5 = Examples.BarCharts.Pattern.init
  , example6 = Examples.BarCharts.SetX1X2.init
  , example7 = Examples.BarCharts.Spacing.init
  , example8 = Examples.BarCharts.DataDependent.init
  , example9 = Examples.BarCharts.Color.init
  , example10 = Examples.BarCharts.TooltipBin.init
  , example11 = Examples.BarCharts.Corners.init
  , example12 = Examples.BarCharts.Ungroup.init
  , example13 = Examples.BarCharts.BinLabels.init
  , example14 = Examples.BarCharts.Stacked.init
  , example15 = Examples.BarCharts.Margin.init
  , example16 = Examples.BarCharts.Borders.init
  , example17 = Examples.BarCharts.Opacity.init
  , example18 = Examples.BarCharts.Legends.init
  , example19 = Examples.BarCharts.Basic.init
  , example20 = Examples.LineCharts.Area.init
  , example21 = Examples.LineCharts.Gradient.init
  , example22 = Examples.LineCharts.Width.init
  , example23 = Examples.LineCharts.TooltipStack.init
  , example24 = Examples.LineCharts.Tooltip.init
  , example25 = Examples.LineCharts.Montone.init
  , example26 = Examples.LineCharts.Pattern.init
  , example27 = Examples.LineCharts.Dots.init
  , example28 = Examples.LineCharts.Dashed.init
  , example29 = Examples.LineCharts.Color.init
  , example30 = Examples.LineCharts.Stepped.init
  , example31 = Examples.LineCharts.Stacked.init
  , example32 = Examples.LineCharts.Labels.init
  , example33 = Examples.LineCharts.Legends.init
  , example34 = Examples.LineCharts.Basic.init
  , example35 = Examples.ScatterCharts.Colors.init
  , example36 = Examples.ScatterCharts.Shapes.init
  , example37 = Examples.ScatterCharts.Highlight.init
  , example38 = Examples.ScatterCharts.DataDependent.init
  , example39 = Examples.ScatterCharts.Borders.init
  , example40 = Examples.ScatterCharts.Opacity.init
  , example41 = Examples.ScatterCharts.Sizes.init
  , example42 = Examples.ScatterCharts.Basic.init
  }


type Msg
  = ExampleMsg0 Examples.BarCharts.Gradient.Msg
  | ExampleMsg1 Examples.BarCharts.Title.Msg
  | ExampleMsg2 Examples.BarCharts.TooltipStack.Msg
  | ExampleMsg3 Examples.BarCharts.Tooltip.Msg
  | ExampleMsg4 Examples.BarCharts.BarLabels.Msg
  | ExampleMsg5 Examples.BarCharts.Pattern.Msg
  | ExampleMsg6 Examples.BarCharts.SetX1X2.Msg
  | ExampleMsg7 Examples.BarCharts.Spacing.Msg
  | ExampleMsg8 Examples.BarCharts.DataDependent.Msg
  | ExampleMsg9 Examples.BarCharts.Color.Msg
  | ExampleMsg10 Examples.BarCharts.TooltipBin.Msg
  | ExampleMsg11 Examples.BarCharts.Corners.Msg
  | ExampleMsg12 Examples.BarCharts.Ungroup.Msg
  | ExampleMsg13 Examples.BarCharts.BinLabels.Msg
  | ExampleMsg14 Examples.BarCharts.Stacked.Msg
  | ExampleMsg15 Examples.BarCharts.Margin.Msg
  | ExampleMsg16 Examples.BarCharts.Borders.Msg
  | ExampleMsg17 Examples.BarCharts.Opacity.Msg
  | ExampleMsg18 Examples.BarCharts.Legends.Msg
  | ExampleMsg19 Examples.BarCharts.Basic.Msg
  | ExampleMsg20 Examples.LineCharts.Area.Msg
  | ExampleMsg21 Examples.LineCharts.Gradient.Msg
  | ExampleMsg22 Examples.LineCharts.Width.Msg
  | ExampleMsg23 Examples.LineCharts.TooltipStack.Msg
  | ExampleMsg24 Examples.LineCharts.Tooltip.Msg
  | ExampleMsg25 Examples.LineCharts.Montone.Msg
  | ExampleMsg26 Examples.LineCharts.Pattern.Msg
  | ExampleMsg27 Examples.LineCharts.Dots.Msg
  | ExampleMsg28 Examples.LineCharts.Dashed.Msg
  | ExampleMsg29 Examples.LineCharts.Color.Msg
  | ExampleMsg30 Examples.LineCharts.Stepped.Msg
  | ExampleMsg31 Examples.LineCharts.Stacked.Msg
  | ExampleMsg32 Examples.LineCharts.Labels.Msg
  | ExampleMsg33 Examples.LineCharts.Legends.Msg
  | ExampleMsg34 Examples.LineCharts.Basic.Msg
  | ExampleMsg35 Examples.ScatterCharts.Colors.Msg
  | ExampleMsg36 Examples.ScatterCharts.Shapes.Msg
  | ExampleMsg37 Examples.ScatterCharts.Highlight.Msg
  | ExampleMsg38 Examples.ScatterCharts.DataDependent.Msg
  | ExampleMsg39 Examples.ScatterCharts.Borders.Msg
  | ExampleMsg40 Examples.ScatterCharts.Opacity.Msg
  | ExampleMsg41 Examples.ScatterCharts.Sizes.Msg
  | ExampleMsg42 Examples.ScatterCharts.Basic.Msg


update : Msg -> Model -> Model
update msg model =
  case msg of
    ExampleMsg0 sub -> { model | example0 = Examples.BarCharts.Gradient.update sub model.example0 }
    ExampleMsg1 sub -> { model | example1 = Examples.BarCharts.Title.update sub model.example1 }
    ExampleMsg2 sub -> { model | example2 = Examples.BarCharts.TooltipStack.update sub model.example2 }
    ExampleMsg3 sub -> { model | example3 = Examples.BarCharts.Tooltip.update sub model.example3 }
    ExampleMsg4 sub -> { model | example4 = Examples.BarCharts.BarLabels.update sub model.example4 }
    ExampleMsg5 sub -> { model | example5 = Examples.BarCharts.Pattern.update sub model.example5 }
    ExampleMsg6 sub -> { model | example6 = Examples.BarCharts.SetX1X2.update sub model.example6 }
    ExampleMsg7 sub -> { model | example7 = Examples.BarCharts.Spacing.update sub model.example7 }
    ExampleMsg8 sub -> { model | example8 = Examples.BarCharts.DataDependent.update sub model.example8 }
    ExampleMsg9 sub -> { model | example9 = Examples.BarCharts.Color.update sub model.example9 }
    ExampleMsg10 sub -> { model | example10 = Examples.BarCharts.TooltipBin.update sub model.example10 }
    ExampleMsg11 sub -> { model | example11 = Examples.BarCharts.Corners.update sub model.example11 }
    ExampleMsg12 sub -> { model | example12 = Examples.BarCharts.Ungroup.update sub model.example12 }
    ExampleMsg13 sub -> { model | example13 = Examples.BarCharts.BinLabels.update sub model.example13 }
    ExampleMsg14 sub -> { model | example14 = Examples.BarCharts.Stacked.update sub model.example14 }
    ExampleMsg15 sub -> { model | example15 = Examples.BarCharts.Margin.update sub model.example15 }
    ExampleMsg16 sub -> { model | example16 = Examples.BarCharts.Borders.update sub model.example16 }
    ExampleMsg17 sub -> { model | example17 = Examples.BarCharts.Opacity.update sub model.example17 }
    ExampleMsg18 sub -> { model | example18 = Examples.BarCharts.Legends.update sub model.example18 }
    ExampleMsg19 sub -> { model | example19 = Examples.BarCharts.Basic.update sub model.example19 }
    ExampleMsg20 sub -> { model | example20 = Examples.LineCharts.Area.update sub model.example20 }
    ExampleMsg21 sub -> { model | example21 = Examples.LineCharts.Gradient.update sub model.example21 }
    ExampleMsg22 sub -> { model | example22 = Examples.LineCharts.Width.update sub model.example22 }
    ExampleMsg23 sub -> { model | example23 = Examples.LineCharts.TooltipStack.update sub model.example23 }
    ExampleMsg24 sub -> { model | example24 = Examples.LineCharts.Tooltip.update sub model.example24 }
    ExampleMsg25 sub -> { model | example25 = Examples.LineCharts.Montone.update sub model.example25 }
    ExampleMsg26 sub -> { model | example26 = Examples.LineCharts.Pattern.update sub model.example26 }
    ExampleMsg27 sub -> { model | example27 = Examples.LineCharts.Dots.update sub model.example27 }
    ExampleMsg28 sub -> { model | example28 = Examples.LineCharts.Dashed.update sub model.example28 }
    ExampleMsg29 sub -> { model | example29 = Examples.LineCharts.Color.update sub model.example29 }
    ExampleMsg30 sub -> { model | example30 = Examples.LineCharts.Stepped.update sub model.example30 }
    ExampleMsg31 sub -> { model | example31 = Examples.LineCharts.Stacked.update sub model.example31 }
    ExampleMsg32 sub -> { model | example32 = Examples.LineCharts.Labels.update sub model.example32 }
    ExampleMsg33 sub -> { model | example33 = Examples.LineCharts.Legends.update sub model.example33 }
    ExampleMsg34 sub -> { model | example34 = Examples.LineCharts.Basic.update sub model.example34 }
    ExampleMsg35 sub -> { model | example35 = Examples.ScatterCharts.Colors.update sub model.example35 }
    ExampleMsg36 sub -> { model | example36 = Examples.ScatterCharts.Shapes.update sub model.example36 }
    ExampleMsg37 sub -> { model | example37 = Examples.ScatterCharts.Highlight.update sub model.example37 }
    ExampleMsg38 sub -> { model | example38 = Examples.ScatterCharts.DataDependent.update sub model.example38 }
    ExampleMsg39 sub -> { model | example39 = Examples.ScatterCharts.Borders.update sub model.example39 }
    ExampleMsg40 sub -> { model | example40 = Examples.ScatterCharts.Opacity.update sub model.example40 }
    ExampleMsg41 sub -> { model | example41 = Examples.ScatterCharts.Sizes.update sub model.example41 }
    ExampleMsg42 sub -> { model | example42 = Examples.ScatterCharts.Basic.update sub model.example42 }


view : Model -> Id -> Html.Html Msg
view model chosen =
  case chosen of
    BarCharts__Gradient -> Html.map ExampleMsg0 (Examples.BarCharts.Gradient.view model.example0)
    BarCharts__Title -> Html.map ExampleMsg1 (Examples.BarCharts.Title.view model.example1)
    BarCharts__TooltipStack -> Html.map ExampleMsg2 (Examples.BarCharts.TooltipStack.view model.example2)
    BarCharts__Tooltip -> Html.map ExampleMsg3 (Examples.BarCharts.Tooltip.view model.example3)
    BarCharts__BarLabels -> Html.map ExampleMsg4 (Examples.BarCharts.BarLabels.view model.example4)
    BarCharts__Pattern -> Html.map ExampleMsg5 (Examples.BarCharts.Pattern.view model.example5)
    BarCharts__SetX1X2 -> Html.map ExampleMsg6 (Examples.BarCharts.SetX1X2.view model.example6)
    BarCharts__Spacing -> Html.map ExampleMsg7 (Examples.BarCharts.Spacing.view model.example7)
    BarCharts__DataDependent -> Html.map ExampleMsg8 (Examples.BarCharts.DataDependent.view model.example8)
    BarCharts__Color -> Html.map ExampleMsg9 (Examples.BarCharts.Color.view model.example9)
    BarCharts__TooltipBin -> Html.map ExampleMsg10 (Examples.BarCharts.TooltipBin.view model.example10)
    BarCharts__Corners -> Html.map ExampleMsg11 (Examples.BarCharts.Corners.view model.example11)
    BarCharts__Ungroup -> Html.map ExampleMsg12 (Examples.BarCharts.Ungroup.view model.example12)
    BarCharts__BinLabels -> Html.map ExampleMsg13 (Examples.BarCharts.BinLabels.view model.example13)
    BarCharts__Stacked -> Html.map ExampleMsg14 (Examples.BarCharts.Stacked.view model.example14)
    BarCharts__Margin -> Html.map ExampleMsg15 (Examples.BarCharts.Margin.view model.example15)
    BarCharts__Borders -> Html.map ExampleMsg16 (Examples.BarCharts.Borders.view model.example16)
    BarCharts__Opacity -> Html.map ExampleMsg17 (Examples.BarCharts.Opacity.view model.example17)
    BarCharts__Legends -> Html.map ExampleMsg18 (Examples.BarCharts.Legends.view model.example18)
    BarCharts__Basic -> Html.map ExampleMsg19 (Examples.BarCharts.Basic.view model.example19)
    LineCharts__Area -> Html.map ExampleMsg20 (Examples.LineCharts.Area.view model.example20)
    LineCharts__Gradient -> Html.map ExampleMsg21 (Examples.LineCharts.Gradient.view model.example21)
    LineCharts__Width -> Html.map ExampleMsg22 (Examples.LineCharts.Width.view model.example22)
    LineCharts__TooltipStack -> Html.map ExampleMsg23 (Examples.LineCharts.TooltipStack.view model.example23)
    LineCharts__Tooltip -> Html.map ExampleMsg24 (Examples.LineCharts.Tooltip.view model.example24)
    LineCharts__Montone -> Html.map ExampleMsg25 (Examples.LineCharts.Montone.view model.example25)
    LineCharts__Pattern -> Html.map ExampleMsg26 (Examples.LineCharts.Pattern.view model.example26)
    LineCharts__Dots -> Html.map ExampleMsg27 (Examples.LineCharts.Dots.view model.example27)
    LineCharts__Dashed -> Html.map ExampleMsg28 (Examples.LineCharts.Dashed.view model.example28)
    LineCharts__Color -> Html.map ExampleMsg29 (Examples.LineCharts.Color.view model.example29)
    LineCharts__Stepped -> Html.map ExampleMsg30 (Examples.LineCharts.Stepped.view model.example30)
    LineCharts__Stacked -> Html.map ExampleMsg31 (Examples.LineCharts.Stacked.view model.example31)
    LineCharts__Labels -> Html.map ExampleMsg32 (Examples.LineCharts.Labels.view model.example32)
    LineCharts__Legends -> Html.map ExampleMsg33 (Examples.LineCharts.Legends.view model.example33)
    LineCharts__Basic -> Html.map ExampleMsg34 (Examples.LineCharts.Basic.view model.example34)
    ScatterCharts__Colors -> Html.map ExampleMsg35 (Examples.ScatterCharts.Colors.view model.example35)
    ScatterCharts__Shapes -> Html.map ExampleMsg36 (Examples.ScatterCharts.Shapes.view model.example36)
    ScatterCharts__Highlight -> Html.map ExampleMsg37 (Examples.ScatterCharts.Highlight.view model.example37)
    ScatterCharts__DataDependent -> Html.map ExampleMsg38 (Examples.ScatterCharts.DataDependent.view model.example38)
    ScatterCharts__Borders -> Html.map ExampleMsg39 (Examples.ScatterCharts.Borders.view model.example39)
    ScatterCharts__Opacity -> Html.map ExampleMsg40 (Examples.ScatterCharts.Opacity.view model.example40)
    ScatterCharts__Sizes -> Html.map ExampleMsg41 (Examples.ScatterCharts.Sizes.view model.example41)
    ScatterCharts__Basic -> Html.map ExampleMsg42 (Examples.ScatterCharts.Basic.view model.example42)


smallCode : Id -> String
smallCode chosen =
  case chosen of
    BarCharts__Gradient -> Examples.BarCharts.Gradient.smallCode
    BarCharts__Title -> Examples.BarCharts.Title.smallCode
    BarCharts__TooltipStack -> Examples.BarCharts.TooltipStack.smallCode
    BarCharts__Tooltip -> Examples.BarCharts.Tooltip.smallCode
    BarCharts__BarLabels -> Examples.BarCharts.BarLabels.smallCode
    BarCharts__Pattern -> Examples.BarCharts.Pattern.smallCode
    BarCharts__SetX1X2 -> Examples.BarCharts.SetX1X2.smallCode
    BarCharts__Spacing -> Examples.BarCharts.Spacing.smallCode
    BarCharts__DataDependent -> Examples.BarCharts.DataDependent.smallCode
    BarCharts__Color -> Examples.BarCharts.Color.smallCode
    BarCharts__TooltipBin -> Examples.BarCharts.TooltipBin.smallCode
    BarCharts__Corners -> Examples.BarCharts.Corners.smallCode
    BarCharts__Ungroup -> Examples.BarCharts.Ungroup.smallCode
    BarCharts__BinLabels -> Examples.BarCharts.BinLabels.smallCode
    BarCharts__Stacked -> Examples.BarCharts.Stacked.smallCode
    BarCharts__Margin -> Examples.BarCharts.Margin.smallCode
    BarCharts__Borders -> Examples.BarCharts.Borders.smallCode
    BarCharts__Opacity -> Examples.BarCharts.Opacity.smallCode
    BarCharts__Legends -> Examples.BarCharts.Legends.smallCode
    BarCharts__Basic -> Examples.BarCharts.Basic.smallCode
    LineCharts__Area -> Examples.LineCharts.Area.smallCode
    LineCharts__Gradient -> Examples.LineCharts.Gradient.smallCode
    LineCharts__Width -> Examples.LineCharts.Width.smallCode
    LineCharts__TooltipStack -> Examples.LineCharts.TooltipStack.smallCode
    LineCharts__Tooltip -> Examples.LineCharts.Tooltip.smallCode
    LineCharts__Montone -> Examples.LineCharts.Montone.smallCode
    LineCharts__Pattern -> Examples.LineCharts.Pattern.smallCode
    LineCharts__Dots -> Examples.LineCharts.Dots.smallCode
    LineCharts__Dashed -> Examples.LineCharts.Dashed.smallCode
    LineCharts__Color -> Examples.LineCharts.Color.smallCode
    LineCharts__Stepped -> Examples.LineCharts.Stepped.smallCode
    LineCharts__Stacked -> Examples.LineCharts.Stacked.smallCode
    LineCharts__Labels -> Examples.LineCharts.Labels.smallCode
    LineCharts__Legends -> Examples.LineCharts.Legends.smallCode
    LineCharts__Basic -> Examples.LineCharts.Basic.smallCode
    ScatterCharts__Colors -> Examples.ScatterCharts.Colors.smallCode
    ScatterCharts__Shapes -> Examples.ScatterCharts.Shapes.smallCode
    ScatterCharts__Highlight -> Examples.ScatterCharts.Highlight.smallCode
    ScatterCharts__DataDependent -> Examples.ScatterCharts.DataDependent.smallCode
    ScatterCharts__Borders -> Examples.ScatterCharts.Borders.smallCode
    ScatterCharts__Opacity -> Examples.ScatterCharts.Opacity.smallCode
    ScatterCharts__Sizes -> Examples.ScatterCharts.Sizes.smallCode
    ScatterCharts__Basic -> Examples.ScatterCharts.Basic.smallCode


largeCode : Id -> String
largeCode chosen =
  case chosen of
    BarCharts__Gradient -> Examples.BarCharts.Gradient.largeCode
    BarCharts__Title -> Examples.BarCharts.Title.largeCode
    BarCharts__TooltipStack -> Examples.BarCharts.TooltipStack.largeCode
    BarCharts__Tooltip -> Examples.BarCharts.Tooltip.largeCode
    BarCharts__BarLabels -> Examples.BarCharts.BarLabels.largeCode
    BarCharts__Pattern -> Examples.BarCharts.Pattern.largeCode
    BarCharts__SetX1X2 -> Examples.BarCharts.SetX1X2.largeCode
    BarCharts__Spacing -> Examples.BarCharts.Spacing.largeCode
    BarCharts__DataDependent -> Examples.BarCharts.DataDependent.largeCode
    BarCharts__Color -> Examples.BarCharts.Color.largeCode
    BarCharts__TooltipBin -> Examples.BarCharts.TooltipBin.largeCode
    BarCharts__Corners -> Examples.BarCharts.Corners.largeCode
    BarCharts__Ungroup -> Examples.BarCharts.Ungroup.largeCode
    BarCharts__BinLabels -> Examples.BarCharts.BinLabels.largeCode
    BarCharts__Stacked -> Examples.BarCharts.Stacked.largeCode
    BarCharts__Margin -> Examples.BarCharts.Margin.largeCode
    BarCharts__Borders -> Examples.BarCharts.Borders.largeCode
    BarCharts__Opacity -> Examples.BarCharts.Opacity.largeCode
    BarCharts__Legends -> Examples.BarCharts.Legends.largeCode
    BarCharts__Basic -> Examples.BarCharts.Basic.largeCode
    LineCharts__Area -> Examples.LineCharts.Area.largeCode
    LineCharts__Gradient -> Examples.LineCharts.Gradient.largeCode
    LineCharts__Width -> Examples.LineCharts.Width.largeCode
    LineCharts__TooltipStack -> Examples.LineCharts.TooltipStack.largeCode
    LineCharts__Tooltip -> Examples.LineCharts.Tooltip.largeCode
    LineCharts__Montone -> Examples.LineCharts.Montone.largeCode
    LineCharts__Pattern -> Examples.LineCharts.Pattern.largeCode
    LineCharts__Dots -> Examples.LineCharts.Dots.largeCode
    LineCharts__Dashed -> Examples.LineCharts.Dashed.largeCode
    LineCharts__Color -> Examples.LineCharts.Color.largeCode
    LineCharts__Stepped -> Examples.LineCharts.Stepped.largeCode
    LineCharts__Stacked -> Examples.LineCharts.Stacked.largeCode
    LineCharts__Labels -> Examples.LineCharts.Labels.largeCode
    LineCharts__Legends -> Examples.LineCharts.Legends.largeCode
    LineCharts__Basic -> Examples.LineCharts.Basic.largeCode
    ScatterCharts__Colors -> Examples.ScatterCharts.Colors.largeCode
    ScatterCharts__Shapes -> Examples.ScatterCharts.Shapes.largeCode
    ScatterCharts__Highlight -> Examples.ScatterCharts.Highlight.largeCode
    ScatterCharts__DataDependent -> Examples.ScatterCharts.DataDependent.largeCode
    ScatterCharts__Borders -> Examples.ScatterCharts.Borders.largeCode
    ScatterCharts__Opacity -> Examples.ScatterCharts.Opacity.largeCode
    ScatterCharts__Sizes -> Examples.ScatterCharts.Sizes.largeCode
    ScatterCharts__Basic -> Examples.ScatterCharts.Basic.largeCode


name : Id -> String
name chosen =
  case chosen of
    BarCharts__Gradient -> "Examples.BarCharts.Gradient"
    BarCharts__Title -> "Examples.BarCharts.Title"
    BarCharts__TooltipStack -> "Examples.BarCharts.TooltipStack"
    BarCharts__Tooltip -> "Examples.BarCharts.Tooltip"
    BarCharts__BarLabels -> "Examples.BarCharts.BarLabels"
    BarCharts__Pattern -> "Examples.BarCharts.Pattern"
    BarCharts__SetX1X2 -> "Examples.BarCharts.SetX1X2"
    BarCharts__Spacing -> "Examples.BarCharts.Spacing"
    BarCharts__DataDependent -> "Examples.BarCharts.DataDependent"
    BarCharts__Color -> "Examples.BarCharts.Color"
    BarCharts__TooltipBin -> "Examples.BarCharts.TooltipBin"
    BarCharts__Corners -> "Examples.BarCharts.Corners"
    BarCharts__Ungroup -> "Examples.BarCharts.Ungroup"
    BarCharts__BinLabels -> "Examples.BarCharts.BinLabels"
    BarCharts__Stacked -> "Examples.BarCharts.Stacked"
    BarCharts__Margin -> "Examples.BarCharts.Margin"
    BarCharts__Borders -> "Examples.BarCharts.Borders"
    BarCharts__Opacity -> "Examples.BarCharts.Opacity"
    BarCharts__Legends -> "Examples.BarCharts.Legends"
    BarCharts__Basic -> "Examples.BarCharts.Basic"
    LineCharts__Area -> "Examples.LineCharts.Area"
    LineCharts__Gradient -> "Examples.LineCharts.Gradient"
    LineCharts__Width -> "Examples.LineCharts.Width"
    LineCharts__TooltipStack -> "Examples.LineCharts.TooltipStack"
    LineCharts__Tooltip -> "Examples.LineCharts.Tooltip"
    LineCharts__Montone -> "Examples.LineCharts.Montone"
    LineCharts__Pattern -> "Examples.LineCharts.Pattern"
    LineCharts__Dots -> "Examples.LineCharts.Dots"
    LineCharts__Dashed -> "Examples.LineCharts.Dashed"
    LineCharts__Color -> "Examples.LineCharts.Color"
    LineCharts__Stepped -> "Examples.LineCharts.Stepped"
    LineCharts__Stacked -> "Examples.LineCharts.Stacked"
    LineCharts__Labels -> "Examples.LineCharts.Labels"
    LineCharts__Legends -> "Examples.LineCharts.Legends"
    LineCharts__Basic -> "Examples.LineCharts.Basic"
    ScatterCharts__Colors -> "Examples.ScatterCharts.Colors"
    ScatterCharts__Shapes -> "Examples.ScatterCharts.Shapes"
    ScatterCharts__Highlight -> "Examples.ScatterCharts.Highlight"
    ScatterCharts__DataDependent -> "Examples.ScatterCharts.DataDependent"
    ScatterCharts__Borders -> "Examples.ScatterCharts.Borders"
    ScatterCharts__Opacity -> "Examples.ScatterCharts.Opacity"
    ScatterCharts__Sizes -> "Examples.ScatterCharts.Sizes"
    ScatterCharts__Basic -> "Examples.ScatterCharts.Basic"


meta chosen =
  case chosen of
    BarCharts__Gradient -> Examples.BarCharts.Gradient.meta
    BarCharts__Title -> Examples.BarCharts.Title.meta
    BarCharts__TooltipStack -> Examples.BarCharts.TooltipStack.meta
    BarCharts__Tooltip -> Examples.BarCharts.Tooltip.meta
    BarCharts__BarLabels -> Examples.BarCharts.BarLabels.meta
    BarCharts__Pattern -> Examples.BarCharts.Pattern.meta
    BarCharts__SetX1X2 -> Examples.BarCharts.SetX1X2.meta
    BarCharts__Spacing -> Examples.BarCharts.Spacing.meta
    BarCharts__DataDependent -> Examples.BarCharts.DataDependent.meta
    BarCharts__Color -> Examples.BarCharts.Color.meta
    BarCharts__TooltipBin -> Examples.BarCharts.TooltipBin.meta
    BarCharts__Corners -> Examples.BarCharts.Corners.meta
    BarCharts__Ungroup -> Examples.BarCharts.Ungroup.meta
    BarCharts__BinLabels -> Examples.BarCharts.BinLabels.meta
    BarCharts__Stacked -> Examples.BarCharts.Stacked.meta
    BarCharts__Margin -> Examples.BarCharts.Margin.meta
    BarCharts__Borders -> Examples.BarCharts.Borders.meta
    BarCharts__Opacity -> Examples.BarCharts.Opacity.meta
    BarCharts__Legends -> Examples.BarCharts.Legends.meta
    BarCharts__Basic -> Examples.BarCharts.Basic.meta
    LineCharts__Area -> Examples.LineCharts.Area.meta
    LineCharts__Gradient -> Examples.LineCharts.Gradient.meta
    LineCharts__Width -> Examples.LineCharts.Width.meta
    LineCharts__TooltipStack -> Examples.LineCharts.TooltipStack.meta
    LineCharts__Tooltip -> Examples.LineCharts.Tooltip.meta
    LineCharts__Montone -> Examples.LineCharts.Montone.meta
    LineCharts__Pattern -> Examples.LineCharts.Pattern.meta
    LineCharts__Dots -> Examples.LineCharts.Dots.meta
    LineCharts__Dashed -> Examples.LineCharts.Dashed.meta
    LineCharts__Color -> Examples.LineCharts.Color.meta
    LineCharts__Stepped -> Examples.LineCharts.Stepped.meta
    LineCharts__Stacked -> Examples.LineCharts.Stacked.meta
    LineCharts__Labels -> Examples.LineCharts.Labels.meta
    LineCharts__Legends -> Examples.LineCharts.Legends.meta
    LineCharts__Basic -> Examples.LineCharts.Basic.meta
    ScatterCharts__Colors -> Examples.ScatterCharts.Colors.meta
    ScatterCharts__Shapes -> Examples.ScatterCharts.Shapes.meta
    ScatterCharts__Highlight -> Examples.ScatterCharts.Highlight.meta
    ScatterCharts__DataDependent -> Examples.ScatterCharts.DataDependent.meta
    ScatterCharts__Borders -> Examples.ScatterCharts.Borders.meta
    ScatterCharts__Opacity -> Examples.ScatterCharts.Opacity.meta
    ScatterCharts__Sizes -> Examples.ScatterCharts.Sizes.meta
    ScatterCharts__Basic -> Examples.ScatterCharts.Basic.meta


all : List Id
all =
  [ BarCharts__Gradient
  , BarCharts__Title
  , BarCharts__TooltipStack
  , BarCharts__Tooltip
  , BarCharts__BarLabels
  , BarCharts__Pattern
  , BarCharts__SetX1X2
  , BarCharts__Spacing
  , BarCharts__DataDependent
  , BarCharts__Color
  , BarCharts__TooltipBin
  , BarCharts__Corners
  , BarCharts__Ungroup
  , BarCharts__BinLabels
  , BarCharts__Stacked
  , BarCharts__Margin
  , BarCharts__Borders
  , BarCharts__Opacity
  , BarCharts__Legends
  , BarCharts__Basic
  , LineCharts__Area
  , LineCharts__Gradient
  , LineCharts__Width
  , LineCharts__TooltipStack
  , LineCharts__Tooltip
  , LineCharts__Montone
  , LineCharts__Pattern
  , LineCharts__Dots
  , LineCharts__Dashed
  , LineCharts__Color
  , LineCharts__Stepped
  , LineCharts__Stacked
  , LineCharts__Labels
  , LineCharts__Legends
  , LineCharts__Basic
  , ScatterCharts__Colors
  , ScatterCharts__Shapes
  , ScatterCharts__Highlight
  , ScatterCharts__DataDependent
  , ScatterCharts__Borders
  , ScatterCharts__Opacity
  , ScatterCharts__Sizes
  , ScatterCharts__Basic
  ]


first : Id
first =
  BarCharts__Gradient
