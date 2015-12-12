'use strict';

var Label = cuz.Label;

var App = '\nReactDOM.render(\n  <div>\n    <Label bsStyle="default">Default</Label>&nbsp;\n    <Label bsStyle="primary">Primary</Label>&nbsp;\n    <Label bsStyle="success">Success</Label>&nbsp;\n    <Label bsStyle="info">Info</Label>&nbsp;\n    <Label bsStyle="warning">Warning</Label>&nbsp;\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('label-type'));