'use strict';

var Code = cuz.Code;

var App = '\n\nReactDOM.render(\n\t<Code value=\'function(){return 0;}\' options={{\n    \tlineNumbers: true,\n    \treadOnly: true,\n   \t mode: "javascript"\n  \t}}\n  />,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('code-default'));