'use strict';

var Input = cuz.Input;
var form = cuz.form;

var App = '\nReactDOM.render(\n  <div>\n    <Input type="text" label="Normal Size" placeholder="Normal text" />\n    <Input type="text" bsSize="small" label="Small Size" placeholder="Small text" />\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-size'));