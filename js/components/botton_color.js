'use strict';

var Button = Cuz.Button;

var App = '\nReact.render(<Button bsStyle="default">Primary</Button>, mountNode);\n';

React.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-btn-color'));