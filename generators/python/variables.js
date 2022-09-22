/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Python for variable blocks.
 */
'use strict';

goog.module('Blockly.Python.variables');

const Python = goog.require('Blockly.Python');
const {NameType} = goog.require('Blockly.Names');


Python['variables_get'] = function(block) {
  // Variable getter.
  const code =
      Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return [code, Python.ORDER_ATOMIC];
};

Python['variables_set'] = function(block) {
  // Variable setter.
  const argument0 =
      Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  const varName =
      Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return varName + ' = ' + argument0 + '\n';
};

Python['variables_call'] = function(block) {
  // Variable getter.
  // var jsonCodeInfo = parseJsonReturn(Python.valueToCode(block, 'VALUE', Python.ORDER_NONE)) || '__str__()'
  // var _linebreak = block.parentBlock_ ? "" : "\n"
  // const argument0 =
  //     Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '__str__()';
  //     // jsonCodeInfo.code
  // const varName =
  //     Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  // return varName + '.' + argument0 + '\n';

  var blockReturn = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE)
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  if(blockReturn != ""){
    var jsonCodeInfo = parseJsonReturn(blockReturn)
    var _linebreak = block.parentBlock_ ? "" : "\n"
    var code = varName + "." +  jsonCodeInfo.code + _linebreak 
    console.log(code)
    if(jsonCodeInfo.type != ""){
        block.setOutput(true,jsonCodeInfo.type)
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        return [code, Python.ORDER_NONE]
    }
    else {
        block.setOutput(false,"")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        return code
    }
  }
  return ""
};

const parseJsonReturn = (str) => {
  // str = str.substring(1,str.length-1).replace(/\s+/g,"")
  return JSON.parse(str)
}