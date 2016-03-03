'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<div>\n  <Button type="primary">主按钮</Button>\n  <Button>次按钮(默认)</Button>\n  <Button type="ghost">幽灵按钮</Button>\n</div>,\nmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));