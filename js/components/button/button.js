'use strict';

var Button = cuz.Button;
var ButtonToolbar = cuz.ButtonToolbar;

var App = '\nReactDOM.render(<ButtonToolbar>\n  <Button bsStyle="primary">主按钮</Button>\n  <Button bsStyle="">次按钮</Button>\n  <Button bsStyle="default">透明按钮</Button>\n</ButtonToolbar>,\nmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));