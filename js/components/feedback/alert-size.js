'use strict';

var Alert = cuz.Alert;

var App = '\nReactDOM.render(\n  <div>\n    <Alert bsStyle="success" bsSize="large">\n      <h4>页面级别提示标题</h4>\n      <p>页面级别提示内容。在这里添加你想要的内容和样式。</p>\n      <a href="/">view more &gt;</a>\n    </Alert>\n    <Alert bsStyle="info" bsSize="large">\n      <h4>页面级别提示标题</h4>\n      <p>页面级别提示内容。在这里添加你想要的内容和样式。</p>\n      <a href="/">view more &gt;</a>\n    </Alert>\n    <Alert bsStyle="warning" bsSize="large">\n      <h4>页面级别提示标题</h4>\n      <p>页面级别提示内容。在这里添加你想要的内容和样式。</p>\n      <a href="/">view more &gt;</a>\n    </Alert>\n    <Alert bsStyle="danger" bsSize="large">\n      <h4>页面级别提示标题</h4>\n      <p>页面级别提示内容。在这里添加你想要的内容和样式。</p>\n      <a href="/">view more &gt;</a>\n    </Alert>\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('feedback-size'));