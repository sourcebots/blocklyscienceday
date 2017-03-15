Blockly.Blocks["turn_left"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('Turn the robot 90 degrees to the left');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Turn the robot 90 degrees to the right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_forward'] = {
  init: function() {
    this.appendValueInput("forward_seconds")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(0, 0), "")
        .appendField("Go forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Go forward by the specified number of seconds');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_backward'] = {
  init: function() {
    this.appendValueInput("backward_seconds")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(0, 0), "Go Backward")
        .appendField("Go backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Go backwards by the specified seconds');
    this.setHelpUrl('');
  }
};