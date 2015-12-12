'use strict';

var ButtonToolbar = cuz.ButtonToolbar;
var Button = cuz.Button;

var App = '\nReactDOM.render(\n  <div>\n    <ButtonToolbar style={{marginBottom:\'10px\'}}>\n      <Button bsStyle="default">Button</Button>\n      <Button bsStyle="primary">Button</Button>\n    </ButtonToolbar>\n    <ButtonToolbar>\n      <Button bsStyle="default" bsSize="small">Small button</Button>\n      <Button bsStyle="primary" bsSize="small">Small button</Button>\n    </ButtonToolbar>\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-size'));