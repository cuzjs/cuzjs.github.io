'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<div>\n  <Button disabled>禁用按钮</Button>\n</div>,\nmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-state-disabled'));