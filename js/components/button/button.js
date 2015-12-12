'use strict';

var Button = cuz.Button;

var App = '\nReactDOM.render(<Button bsStyle="primary">Primary</Button>, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));