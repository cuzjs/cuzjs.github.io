'use strict';

var Input = cuz.Input;
var RadioGroup = cuz.RadioGroup;
var form = cuz.form;

var App = '\nReactDOM.render(\n    <div>\n      <div>\n        <Input type="checkbox" checked label="checkbox1" />\n        <Input type="checkbox" label="checkbox2" />\n      </div>\n      <div>\n        <Input type="checkbox" checked label="checkbox3" disabled />\n        <Input type="checkbox" label="checkbox4" disabled />\n      </div>\n    </div>,\n    mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-checkBox'));