'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<div>\n  <Button size="large">大号按钮</Button>\n  <Button>中号按钮(默认)</Button>\n  <Button size="small">小号按钮</Button>\n</div>\n, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-size'));