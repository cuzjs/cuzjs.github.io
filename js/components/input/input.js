'use strict';

var Input = cuz.Input;
var SearchGroup = cuz.SearchGroup;
var form = cuz.form;

var App = '\nReactDOM.render(\n  <div>\n    <Input type="text" label="Text" placeholder="Enter text" />\n    <Input type="password" label="Password" />\n    <Input type="textarea" label="Text Area" placeholder="Textarea" />\n    <SearchGroup type="text"/>\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(ReactPlayground, { codeText: App })
), document.getElementById('example-default'));