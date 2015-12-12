'use strict';

var Button = cuz.Button;
var ButtonToolbar = cuz.ButtonToolbar;

var App = '\nReactDOM.render(\n  <ButtonToolbar>\n    <Button bsStyle="default" bsSize="large" disabled>Button</Button>\n    <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>\n  </ButtonToolbar>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-state-disabled'));