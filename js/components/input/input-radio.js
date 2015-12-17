'use strict';

var Input = cuz.Input;
var RadioGroup = cuz.RadioGroup;
var form = cuz.form;

var App = '\nReactDOM.render(\n    <div>\n      <RadioGroup>\n        <Input type="radio" checked label="radio1" />\n        <Input type="radio" label="radio2" />\n      </RadioGroup>\n\n      <RadioGroup>\n        <Input type="radio" checked label="radio3"  disabled />\n        <Input type="radio" label="radio4"  disabled />\n      </RadioGroup>\n    </div>,\n    mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-radio'));