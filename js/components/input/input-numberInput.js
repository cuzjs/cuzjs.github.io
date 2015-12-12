'use strict';

var Input = cuz.Input;
var NumberInput = cuz.NumberInput;

var App = '\nReactDOM.render(\n  <div>\n    <NumberInput type="text" value={20} />\n    <NumberInput type="text" value={20} disabled />\n    <NumberInput type="text" value={20} max={30} min={10} step={2} />\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-numberInput'));