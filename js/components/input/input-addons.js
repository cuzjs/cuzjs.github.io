'use strict';

var Input = cuz.Input;

var App = '\nReact.render(\n\t<div>\n\t\t<Input type="text" addonAfter="glyphicon glyphicon-search" />\n\t\t<Input type="text" bsSize="small" addonAfter="glyphicon glyphicon-search" />\n\t</div>,\n\t mountNode);\n';

React.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-size'));