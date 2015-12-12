'use strict';

var PageSize = cuz.PageSize;

var App = '\nconst pageSizeInstance = (\n\t<PageSize\n  onSelect={function(key){alert(key)}}\n  sizeList={[5, 10, 15, 20]}\n  defaultSize={10}\n  showText="show"\n />\n\t);\n\nReactDOM.render(\n  pageSizeInstance,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('pagination-pageSize'));