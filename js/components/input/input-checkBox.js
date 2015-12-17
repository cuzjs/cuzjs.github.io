'use strict';

var Checkbox = cuz.Checkbox;

var App = '\nconst checkboxInstance = (\n  <div>\n    <div>\n      <Checkbox value="1"> Checkbox 1 </Checkbox>\n      <Checkbox value="2"> Checkbox 2 </Checkbox>\n    </div>\n\n    <div>\n      <Checkbox value="3" disabled> Checkbox 3 </Checkbox>\n      <Checkbox value="4" disabled> Checkbox 4 </Checkbox>\n    </div>\n  </div>\n  );\n\nReactDOM.render(checkboxInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-checkBox'));