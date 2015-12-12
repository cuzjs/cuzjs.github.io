'use strict';

var Button = cuz.Button;
var ButtonGroup = cuz.ButtonGroup;

var App = '\nReactDOM.render(\n  <ButtonGroup>\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('btn-groups'));