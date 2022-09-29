/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define([], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory();
  } else { // Browser
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
}(this, function() {
// This file was automatically generated.  Do not modify.

'use strict';

var Blockly = Blockly || { Msg: Object.create(null) };

Blockly.Msg["ADD_COMMENT"] = "Ŋlɔ Numeɖeɖe";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Mate ŋu atutu teaŋutrɔna '%1' o elabe ewɔ akpa aɖe le teaŋutrɔna '%2' me.";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Trɔ nuŋlɔdzesiawo:";
Blockly.Msg["CLEAN_UP"] = "Tutu Nuawo";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";  // untranslated
Blockly.Msg["COLLAPSE_ALL"] = "Hatsotsoawo Me Nuwo Nebu";
Blockly.Msg["COLLAPSE_BLOCK"] = "Hatsotso Me Nuwo Nebu";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "amedede 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "amadede 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "agbɔsɔsɔ";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "tsaka";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Tsaka amadede eve kple agbɔsɔsɔ si nye (0.0 - 1.0).";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://ee.wikipedia.org/wiki/Amadede";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Tia amadede ɖeka le amadedetiaƒea.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "amadede aɖe ko";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Tia amadede aɖe ko.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "blɔ";
Blockly.Msg["COLOUR_RGB_GREEN"] = "gbemumu";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "dzĩ";
Blockly.Msg["COLOUR_RGB_TITLE"] = "de amae kple";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "tsaka";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "Nedo le wɔtiaɖenua me";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "neyi edzi kple wɔtiaɖenua si kplɔe ɖo";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Nedo le wɔtiaɖenua si me wòlea me.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Neto wɔtiaɖenu sia susɔea ta wòayi bubu dzi.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Nuxlɔ̃ame: Wɔtiaɖenu me ko woate ŋu azã ƒuƒoƒo sia le.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "nu sia nu natso %2 me ayi %1 me";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Tia teaŋutrɔna '%1' na nuawo dometɔ ɖe sia ɖe si li, eye nàŋlɔ gbedeasi aɖe.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "Xlẽ %1 tso %2 yi %3 to %4 dzi";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Xexlẽdzesi tɔtrɔ '%1' nenye xexlẽdzesi si dze egɔme kple esiwo kplɔe ɖo va se ɖe mamlɛtɔ dzi, nebu dometsotso si wofia kple nyatakaka suetɔ siwo wofia asii.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Tsɔ biabia aɖe kpe ne ƒuƒoƒo la.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Tsɔ lé wo katã ƒe ne ƒe ƒuƒoƒo kpe biabia mamlɛa.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Tsɔ kpee, ɖee le eme alo gbugbɔ akpawo ɖo nàtsɔ asi le ne ƒe ƒuƒoƒoa ŋu.";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "ke boŋ";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "Ke boŋ ne";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "Ne";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Ne asime aɖe le eme la, ke taɖodzinya aɖewo neva eme.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Ne asime aɖe le eme la, ke taɖodzinyawo ƒe ƒuƒoƒo gbãtɔ neva eme. Ne menye nenem o la, ke taɖodzinyawo ƒe ƒuƒoƒo evelia neva eme.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Ne asime gbãtɔe le eme la, ke taɖodzinyawo ƒe ƒuƒoƒo gbãtɔ neva eme. Gake ne asime eveliae le eme la, taɖodzinyawo ƒe ƒuƒoƒo evelia boŋ neva eme.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Ne asime gbãtɔ le eme la, ke taɖodzinyawo ƒe ƒuƒoƒo gbãtɔ neva eme. Ke ne taɖodzinyawo ƒe ƒuƒoƒo evelia boŋue le eme la, taɖodzinyawo ƒe ƒuƒoƒo evelia neva eme. Ne taɖodzinya aɖeke mele eme o la,taɖodzinyawo ƒe ƒuƒoƒo mamlɛtɔ neva eme.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://ee.wikipedia.org/wiki/Na_nogo";
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "wɔ";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "Wɔe zi %1";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Gbugbɔ biabia aɖewo zi geɖe.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "gbugbɔ wɔe va se ɖe";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "gbugbɔ wɔe ne";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Ne nyatakaka dea, ke wɔ biabia aɖewo.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Ne nyatakaka dea, ke wɔ biabia aɖewo.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "Èdi be netutu nu %1 katã?";
Blockly.Msg["DELETE_BLOCK"] = "Tutu Hatsotsoa";
Blockly.Msg["DELETE_VARIABLE"] = "Tutu teaŋutrɔna '%1'";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Netutu %1 ŋkɔ si nètsɔ na teaŋutrɔna '%2'?";
Blockly.Msg["DELETE_X_BLOCKS"] = "Tutu Hatsotso %1";
Blockly.Msg["DIALOG_CANCEL"] = "Natasii";
Blockly.Msg["DIALOG_OK"] = "Yoo";
Blockly.Msg["DISABLE_BLOCK"] = "Tsi Hatsotsoa";
Blockly.Msg["DUPLICATE_BLOCK"] = "Gbugbɔe Wɔ";
Blockly.Msg["DUPLICATE_COMMENT"] = "Kɔpi Numeɖeɖea";
Blockly.Msg["ENABLE_BLOCK"] = "Si Hatsotsoa";
Blockly.Msg["EXPAND_ALL"] = "Hatsotsoawo Me Nuwo Nedze";
Blockly.Msg["EXPAND_BLOCK"] = "Hatsotsoa Me Nuwo Nedze";
Blockly.Msg["EXTERNAL_INPUTS"] = "Gotakpeɖeŋunuwo";
Blockly.Msg["HELP"] = "Kpekpeɖeŋu";
Blockly.Msg["INLINE_INPUTS"] = "Interdzikpeɖeŋuwo";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "create empty list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Returns a list, of length 0, containing no data records";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "list";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this list block.";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "create list with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Add an item to the list.";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Create a list with any number of items.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "gbãtɔ";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# tso nuwuwu";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET"] = "get";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "get and remove";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "mamlɛtɔ";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "ɖe sia ɖe ko";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "ɖee ɖa";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Aʋu nu gbãtɔ.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Aʋu nua le afi si wòle le nuwo dome.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Aʋu nu mamlɛtɔ.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Aʋu nu ɖe sia ɖe aɖe ko.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Eɖea nu gbãtɔ ɖa eye eya kee gaʋua nu gbãtɔ.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Aɖe nua ɖa eye wòaʋu nua le afi si wòle le nuawo dome.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Eɖea nu mamlɛtɔ ɖa eye eya kee gaʋua nu mamlɛtɔ.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Removes and returns a random item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Removes the first item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Removes the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Removes the last item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Removes a random item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "yi # tso nuwuwu";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "yi #";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "yi mamlɛtɔ";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "get sub-list from first";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "get sub-list from # from end";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "get sub-list from #";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Creates a copy of the specified portion of a list.";  // untranslated
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 nye nu mamlɛtɔ.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 nye nu gbãtɔ.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "find first occurrence of item";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "find last occurrence of item";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";  // untranslated
Blockly.Msg["LISTS_INLIST"] = "in list";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 le ƒuƒlu";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Returns true if the list is empty.";  // untranslated
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "length of %1";  // untranslated
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Returns the length of a list.";  // untranslated
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "create list with item %1 repeated %2 times";  // untranslated
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Creates a list consisting of the given value repeated the specified number of times.";  // untranslated
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";  // untranslated
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "as";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insert at";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_SET"] = "set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Inserts the item at the start of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Inserts the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Append the item to the end of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Inserts the item randomly in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Sets the first item in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Sets the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Sets the last item in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Sets a random item in a list.";  // untranslated
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "dzi yim";
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "ɖiɖim";
Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";  // untranslated
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic";  // untranslated
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "make list from text";  // untranslated
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "make text from list";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "with delimiter";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "mademadea";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Nefia dedia alo mademadea.";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "dedia";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Masɔmasɔ_(akɔntabubu)";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme eveawo sɔ kple wo nɔewo.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme gbãtɔ lolo wu evelia.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme gbãtɔ lolo wu evelia alo sɔ kplii.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme gbãtɔ mede evelia nu o.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme gbãtɔ mede evelia nu o alo sɔ kplii.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme eveawo mesɔ kple wo nɔewo o.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "menye %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Ŋuɖoɖoa nenye nyateƒe ne nudemea menye nyateƒe o. Ŋuɖoɖoa nenye aʋatso ne nudemea nye nyateƒe.";
Blockly.Msg["LOGIC_NULL"] = "ɖeke o";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Mekpɔ ɖeke o.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "eye";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "alo";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme eveawo nye nyateƒe.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Ŋuɖoɖoa nenye nyateƒe ne nudeme ɖeka teti nye nyateƒe.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "dodokpɔ";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "nenye dedietɔ";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "nenye nyuitɔ";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Kpɔ nu si dze le \"dodokpɔ\" me. Ne dediae dze la, tia \"ne dedia\"; ke ne manyomanyotɔe la, tia \"ne mademadea.\"";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://ee.wikipedia.org/wiki/Xexlẽdzesibubu";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Bu xexlẽdzesi evea ƒoƒo ƒu ƒe akɔnta.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Bu xexlẽdzesi ɖeka mama ɖe xexlẽdzesi evelia me ƒe akɔnta.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Bu xexlẽdzesi ɖeka ɖeɖe le evelia me ƒe akɔnta.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Bu xexlẽdzesi gbãtɔ teƒe evelia ƒe akɔnta.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Na be xexlẽdzesi gbãtɔ nadzi eɖokui ɖe edzi zigbɔzi xexlẽdzesi evelia.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";  // untranslated
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";  // untranslated
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";  // untranslated
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";  // untranslated
Blockly.Msg["MATH_CHANGE_TITLE"] = "change %1 by %2";  // untranslated
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Add a number to variable '%1'.";  // untranslated
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://en.wikipedia.org/wiki/Mathematical_constant";  // untranslated
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "constrain %1 low %2 high %3";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Constrain a number to be between the specified limits (inclusive).";  // untranslated
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "woate ŋu amae ɖe";
Blockly.Msg["MATH_IS_EVEN"] = "enye eve ƒomevi";
Blockly.Msg["MATH_IS_NEGATIVE"] = "enye xexlẽme megbeyitɔ";
Blockly.Msg["MATH_IS_ODD"] = "enye etɔ̃ ƒomevi";
Blockly.Msg["MATH_IS_POSITIVE"] = "enye xexlẽme ŋgɔgbeyitɔ";
Blockly.Msg["MATH_IS_PRIME"] = " enye xexlẽme blibo";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";  // untranslated
Blockly.Msg["MATH_IS_WHOLE"] = "enye blibo";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";  // untranslated
Blockly.Msg["MATH_MODULO_TITLE"] = "remainder of %1 ÷ %2";  // untranslated
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Return the remainder from dividing the two numbers.";  // untranslated
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://ee.wikipedia.org/wiki/Xexlẽdzesi";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Xexlẽdzesi aɖe";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "average of list";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "gãtɔ le nuwo dome";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "median of list";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "suetɔ le wo dome";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "modes of list";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "random item of list";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "standard deviation of list";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "sum of list";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Return the average (arithmetic mean) of the numeric values in the list.";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Neʋu xexlẽdzesi gãtɔ.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Return the median number in the list.";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Neʋu suetɔ le nuwo dome.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Return a list of the most common item(s) in the list.";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Return a random element from the list.";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Return the standard deviation of the list.";  // untranslated
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Return the sum of all the numbers in the list.";  // untranslated
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "random fraction";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "random integer from %1 to %2";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Return a random integer between the two specified limits, inclusive.";  // untranslated
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";  // untranslated
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "round";  // untranslated
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "round down";  // untranslated
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "round up";  // untranslated
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Round a number up or down.";  // untranslated
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://en.wikipedia.org/wiki/dzidziɖedzi_eɖokui zigbɔzi eve";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "xexlẽ blibo";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "eƒe teƒe eve";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Nena xexlẽdzesi aɖe nanye xexlẽ blibo.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Nebu e-teƒe-e zigbɔzi xexlẽdzesia.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Xexlẽdzesia nedzi ɖe edzi eɖokui zigbzi e.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Nebu zigbɔzi neni 10-teƒe-10 awɔ xexlẽdzesia.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Nena xexlẽdzesi aɖe nanye xexlẽdzesi madenanekeo.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = " Nebu ewo-teƒe-ewo zigbɔzi xexlẽdzesia.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Xexlẽdzesia nedzi ɖe edzi teƒe eɖokui";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";  // untranslated
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";  // untranslated
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";  // untranslated
Blockly.Msg["MATH_TRIG_COS"] = "cos";  // untranslated
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://en.wikipedia.org/wiki/Trigonometric_functions";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";  // untranslated
Blockly.Msg["MATH_TRIG_TAN"] = "tan";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Return the arccosine of a number.";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Return the arcsine of a number.";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Return the arctangent of a number.";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Return the cosine of a degree (not radian).";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Nebu dzogɔe le digri me (menye radiã o).";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Return the tangent of a degree (not radian).";  // untranslated
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Wɔ amadede teaŋutrɔna...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Wɔ xexlẽdzesi teaŋutrɔna...";
Blockly.Msg["NEW_STRING_VARIABLE"] = "Wɔ nya teaŋutrɔna...";
Blockly.Msg["NEW_VARIABLE"] = "Wɔ teaŋutrɔna...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Nuŋlɔdzesi tɔtrɔa yeye ƒe ŋkɔ:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Teaŋutrɔna ƒomevi yeye:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "allow statements";  // untranslated
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "kple:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Run the user-defined function '%1'.";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Run the user-defined function '%1' and use its output.";  // untranslated
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "kple:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Create '%1'";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do something";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "to";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Creates a function with no output.";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "return";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Creates a function with an output.";  // untranslated
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Warning: This function has duplicate parameters.";  // untranslated
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Highlight function definition";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "If a value is true, then return a second value.";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warning: This block may be used only within a function definition.";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "input name:";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Add an input to the function.";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "inputs";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Add, remove, or reorder inputs to this function.";  // untranslated
Blockly.Msg["REDO"] = "Trɔ Wɔe";
Blockly.Msg["REMOVE_COMMENT"] = "Ɖe Numeɖeɖea Ɖa";
Blockly.Msg["RENAME_VARIABLE"] = "Na ŋkɔ bubu nuŋlɔdzesi tɔtrɔa...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Na ŋkɔ bubu nuŋlɔdzesi tɔtrɔa '%1' yi:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "to %1 append text %2";  // untranslated
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Append some text to variable '%1'.";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "to lower case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "to Title Case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "to UPPER CASE";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Return a copy of the text in a different case.";  // untranslated
Blockly.Msg["TEXT_CHARAT_FIRST"] = "get first letter";  // untranslated
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "get letter # from end";  // untranslated
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "get letter #";  // untranslated
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "get last letter";  // untranslated
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "get random letter";  // untranslated
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2";  // untranslated
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Returns the letter at the specified position.";  // untranslated
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";  // untranslated
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";  // untranslated
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Add an item to the text.";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "join";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this text block.";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "to letter # from end";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "to letter #";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "to last letter";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "in text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "get substring from first letter";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "get substring from letter # from end";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "get substring from letter #";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Returns a specified portion of the text.";  // untranslated
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "find first occurrence of text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "find last occurrence of text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "in text %1 %2 %3";  // untranslated
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 is empty";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Returns true if the provided text is empty.";  // untranslated
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "create text with";  // untranslated
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Create a piece of text by joining together any number of items.";  // untranslated
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "length of %1";  // untranslated
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Returns the number of letters (including spaces) in the provided text.";  // untranslated
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "print %1";  // untranslated
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Print the specified text, number or other value.";  // untranslated
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Prompt for user for a number.";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Prompt for user for some text.";  // untranslated
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "prompt for number with message";  // untranslated
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "prompt for text with message";  // untranslated
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";  // untranslated
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";  // untranslated
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";  // untranslated
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";  // untranslated
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";  // untranslated
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";  // untranslated
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "A letter, word, or line of text.";  // untranslated
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "trim spaces from both sides of";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "trim spaces from left side of";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "trim spaces from right side of";  // untranslated
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Return a copy of the text with spaces removed from one or both ends.";  // untranslated
Blockly.Msg["TODAY"] = "Egbe";
Blockly.Msg["UNDO"] = "Gbugbɔe";
Blockly.Msg["UNNAMED_KEY"] = "unnamed";  // untranslated
Blockly.Msg["VARIABLES_CALL_OUT_TOOLTIP"] = "Returns the value of a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_CALL_TOOLTIP"] = "Calls a method from current variable.";  // untranslated
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "nu";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Create 'set %1'";  // untranslated
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Returns the value of this variable.";  // untranslated
Blockly.Msg["VARIABLES_SET"] = "set %1 to %2";  // untranslated
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Create 'get %1'";  // untranslated
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Sets this variable to be equal to the input.";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Teaŋutrɔna si ŋkɔe nye '%1' li xoxo.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Teaŋutrɔna '%1' li xoxo eye wotsɔ ŋkɔ sia xoxo na bubu si nye: '%2'.";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";  // untranslated
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];

Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["PROCEDURES_HUE"] = "290";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
return Blockly.Msg;
})); 
