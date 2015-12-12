'use strict';

var PageTo = cuz.PageTo;

var App = '\nconst pageToInstance = (\n\t<PageTo\n    onSelect={function(key){alert(key)}}\n    btnText="Go"\n    desText="Go to page"/>\n\t);\n\nReactDOM.render(\n  pageToInstance,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('pagination-pageTo'));