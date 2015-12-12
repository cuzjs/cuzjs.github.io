'use strict';

var Box = cuz.Box;

var App = '\nReactDOM.render(\n  <Box header="title" viewMore="http://www.taobao.com" viewMoreText="view more" style={{marginBottom:\'30px\'}}>\n    您对店铺装修页面已经作了部分的调整，最后一次保存时间为2015-11-11。您对店铺装修页面已经作了部分的调整，最后一次保存时间为2015-11-11。您对店铺装修页面已经作了部分的调整，最后一次保存时间为2015-11-11。\n  </Box>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('box-default'));