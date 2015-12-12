'use strict';

var Button = cuz.Button;

var App = '\nReact.render(<Button bsStyle="primary">Primary</Button>, mountNode);\n';

React.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));