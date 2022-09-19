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
  var jsonCodeInfo = parseJsonReturn(Python.valueToCode(block, 'VALUE', Python.ORDER_NONE)) || '__str__()'
  var _linebreak = block.parentBlock_ ? "" : "\n"
  const argument0 =
      // Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '__str__()';
      jsonCodeInfo.code
  const varName =
      Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  return varName + '.' + argument0 + '\n';
};

const parseJsonReturn = (str) => {
  str = str.substring(1,str.length-1).replace(/\s+/g,"")
  return JSON.parse(str)
}