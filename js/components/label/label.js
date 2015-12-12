'use strict';

var Label = cuz.Label;

var App = '\nReactDOM.render(<Label bsStyle="default">Default</Label>,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));