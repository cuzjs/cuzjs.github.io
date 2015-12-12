'use strict';

var Button = cuz.Button;
var ButtonToolbar = cuz.ButtonToolbar;

var App = '\nReactDOM.render(\n  <ButtonToolbar>\n    <Button bsStyle="default">Default</Button>\n    <Button bsStyle="primary">Primary</Button>\n  </ButtonToolbar>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-options'));