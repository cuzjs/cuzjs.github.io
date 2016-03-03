'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<div>\n  <Button active>激活按钮</Button>\n  <Button type="primary" active>激活按钮</Button>\n</div>,\nmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-state-active'));