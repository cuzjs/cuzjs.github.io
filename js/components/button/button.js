'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<div>\n  <Button bsStyle="primary">主按钮</Button>\n  <Button>次按钮</Button>\n  <Button bsStyle="default">透明次按钮</Button>\n</div>,\nmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));