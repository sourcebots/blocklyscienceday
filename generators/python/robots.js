var move_forward_power = 120;
var sleep_time = 1;

Blockly.Python['turn_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\nturn_left()\nsleep(sleep_time)'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\nturn_right()\nsleep(sleep_time)'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['go_forward'] = function(block) {
  var value_forward_seconds = Blockly.Python.valueToCode(block, 'forward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'go_forward()\nsleep(sleep_time)'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['go_backward'] = function(block) {
  var number_go_backward = block.getFieldValue('Go Backward');
  var value_backward_seconds = Blockly.Python.valueToCode(block, 'backward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
 var code = 'go_backward()\nsleep(sleep_time)'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['marker'] = function(block) {
    var number_marker_num = block.getFieldValue('marker_num');
    // TODO: Assemble Python into code variable.
    var code = 'go_to_marker(value)\nsleep(value2)\n'.replace("value", number_marker_num).replace("value2",
                sleep_time);
    return code;
};