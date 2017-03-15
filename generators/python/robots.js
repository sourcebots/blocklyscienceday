var move_forward_power = 120;

Blockly.Python['turn_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'setMotorPower(value)'.replace("value", move_forward_power);
  alert(code);
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'print("Hello World")\n';
  return code;
};

Blockly.Python['go_forward'] = function(block) {
  var value_forward_seconds = Blockly.Python.valueToCode(block, 'forward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print("Hello World")\n';
  return code;
};

Blockly.Python['go_backward'] = function(block) {
  var number_go_backward = block.getFieldValue('Go Backward');
  var value_backward_seconds = Blockly.Python.valueToCode(block, 'backward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print("Hello World")\n';
  return code;
};