'use strict';

var Input = cuz.Input;
var form = cuz.form;

var App = '\nReactDOM.render(\n  <div>\n    <Input type="text" label="Normal" placeholder="Enter text" />\n    <Input type="text" label="Disabled" disabled placeholder="Disabled"  />\n    <Input type="text" label="Error" placeholder="Error" bsStyle="error" />\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-state'));