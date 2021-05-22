module Ui.Code exposing (view)

import Html as H
import Html.Attributes as HA
import Html.Events as HE
import Element as E
import Element.Font as F
import Element.Border as B
import Element.Input as I
import Element.Background as BG

import SyntaxHighlight as SH



view : { template : String, edits : List String } -> E.Element msg
view config =
  let fillTemplate ( i, e ) =
        String.replace ("{{" ++ String.fromInt (i + 1) ++ "}}") (String.trim e)
  in
  H.div []
    [ SH.useTheme SH.gitHub
    , List.indexedMap Tuple.pair config.edits
        |> List.foldl fillTemplate config.template
        |> fixIndent
        |> SH.elm
        |> Result.map (SH.toBlockHtml (Just 1))
        |> Result.withDefault (H.pre [] [ H.code [] [ H.text config.template ]])
    ]
    |> E.html
    |> E.el
        [ E.width E.fill
        , E.height (E.fill |> E.minimum 300)
        , E.htmlAttribute (HA.style "white-space" "pre")
        , F.size 14
        , F.family [ F.typeface "Source Code Pro", F.monospace ]
        , E.alignTop
        , E.scrollbarX
        ]


fixIndent : String -> String
fixIndent code =
  code
    |> String.lines
    |> List.drop 1
    |> List.map (\x ->
        let trimmed = String.trimLeft x
            indent = String.length x - String.length trimmed
        in
        ( indent, x ))
    |> (\xs ->
        let smallest = Maybe.withDefault 0 <| List.minimum (List.map Tuple.first xs) in
        List.map (\( _, x ) -> String.dropLeft smallest x) xs
          |> String.join "\n"
      )

