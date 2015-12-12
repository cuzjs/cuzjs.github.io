'use strict';

var Button = cuz.Button;
var ButtonToolbar = cuz.ButtonToolbar;

var App = '\nReactDOM.render(\n  <ButtonToolbar>\n    <Button bsStyle="default" bsSize="large" active>Button</Button>\n    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>\n  </ButtonToolbar>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-state-active'));