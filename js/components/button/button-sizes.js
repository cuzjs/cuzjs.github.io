'use strict';

var Button = cuz.Button;
var ButtonToolbar = cuz.ButtonToolbar;

var App = '\nReactDOM.render(<div>\n  <ButtonToolbar>\n    <Button bsStyle="default">默认按钮</Button>\n    <Button bsStyle="primary">默认按钮</Button>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <Button bsStyle="default" bsSize="small">小号按钮</Button>\n    <Button bsStyle="primary" bsSize="small">小号按钮</Button>\n  </ButtonToolbar>\n</div>\n, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-size'));