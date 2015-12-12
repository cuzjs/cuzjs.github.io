'use strict';

var SearchGroup = cuz.SearchGroup;
var form = cuz.form;

var App = '\nReactDOM.render(\n  <div>\n    <SearchGroup type="text"  placeholder="Search" />\n    <SearchGroup type="text" bsSize="small"  placeholder="Search" />\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('input-search'));