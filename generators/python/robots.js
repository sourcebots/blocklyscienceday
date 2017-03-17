var move_forward_power = 120;
var sleep_time = 1;

Blockly.Python['turn_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\nsetMotorPower(m[0] ,value)\nsleep(sleep_time)'.replace("value", move_forward_power).
                replace("sleep_time", sleep_time);
  alert(code);
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\nsetMotorPower(m[1] ,value)\nsleep(sleep_time)'.replace("value", move_forward_power).
                replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['go_forward'] = function(block) {
  var value_forward_seconds = Blockly.Python.valueToCode(block, 'forward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'setMotorPower(value)\nsleep(sleep_time)'.replace("value", move_forward_power).
                replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['go_backward'] = function(block) {
  var number_go_backward = block.getFieldValue('Go Backward');
  var value_backward_seconds = Blockly.Python.valueToCode(block, 'backward_seconds', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
 var code = 'setMotorPower(value)\nsleep(sleep_time)'.replace("value", move_forward_power).
                replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['marker'] = function(block) {
    var number_marker_num = block.getFieldValue('marker_num');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};