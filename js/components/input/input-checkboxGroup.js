'use strict';

var CheckboxGroup = cuz.CheckboxGroup;
var Checkbox = cuz.Checkbox;

var App = '\nconst checkboxGroupInstance = (\n  <CheckboxGroup\n  col={3}\n  max={4}\n  onSelect={function(data, event){console.log(data)}} >\n    <Checkbox standalone={true} value="1">1</Checkbox>\n    <Checkbox value="2">2</Checkbox>\n    <Checkbox value="3">3</Checkbox>\n  </CheckboxGroup>\n  );\n\nReactDOM.render(checkboxGroupInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-checkboxGroup'));