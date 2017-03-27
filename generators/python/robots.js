var move_forward_power = 120;
var sleep_time = 1;

Blockly.Python['turn_left'] = function(block) {
  var code = '\nbot.turn_left()\ntime.sleep(sleep_time)\n'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  var code = '\nbot.turn_right()\ntime.sleep(sleep_time)\n'.replace("sleep_time", sleep_time);
  return code;
};

Blockly.Python['go_forward'] = function(block) {
  var number_go_forward = block.getFieldValue('Go Forward');
  var value_forward_seconds = Blockly.Python.valueToCode(block, 'forward_seconds', Blockly.Python.ORDER_ATOMIC);
  var code = 'bot.go_forward(value)\ntime.sleep(sleep_time)\n'.replace("sleep_time", sleep_time).replace("value", number_go_forward);
  return code;
};

Blockly.Python['go_backward'] = function(block) {
  var number_go_backward = block.getFieldValue('Go Backward');
  var value_backward_seconds = Blockly.Python.valueToCode(block, 'backward_seconds', Blockly.Python.ORDER_ATOMIC);
  var code = 'bot.go_backward(value)\ntime.sleep(sleep_time)\n'.replace("sleep_time", sleep_time).replace("value", number_go_backward);
  return code;
};

Blockly.Python['marker'] = function(block) {
    var number_marker_num = block.getFieldValue('marker_num');
    var code = 'bot.go_to_marker(value)\ntime.sleep(value2)\n'.replace("value", number_marker_num).replace("value2",
                sleep_time);
    return code;
};
