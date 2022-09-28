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
  const code = "self." +
      Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return [code, Python.ORDER_ATOMIC];
};

Python['variables_set'] = function(block) {
  // Variable setter.
  const argument0 =
      Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  const varName = "self." + 
      Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return varName + ' = ' + argument0 + '\n';
};

Python['variables_call'] = function(block) {
  var blockReturn = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '{"code": "__str__()", "type": ""}';
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);

  var jsonCodeInfo = parseJsonReturn(blockReturn);
  var code = "self." + varName + "." +  jsonCodeInfo.code + "\n"
  return code;
};

Python['variables_call_out'] = function(block) {
  var blockReturn = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '{"code": "__str__()", "type": ""}';
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);

  var jsonCodeInfo = parseJsonReturn(blockReturn);
  var code = "self." + varName + "." +  jsonCodeInfo.code
  return [code, Python.ORDER_ATOMIC];
};

const parseJsonReturn = (str) => {
  // str = str.substring(1,str.length-1).replace(/\s+/g,"")
  return JSON.parse(str)
}