'use strict';

var Alert = cuz.Alert;

var App = '\nconst alertInstance = (\n\t<div>\n    <Alert bsStyle="success">\n    Sucess Alert <a  className="pull-right" href="https://www.taobao.com/">查看详情</a>\n    </Alert>\n\n    <Alert bsStyle="info">\n    Info Alert <a  className="pull-right" href="https://www.taobao.com/">查看详情</a>\n    </Alert>\n\n    <Alert bsStyle="warning">\n    Warning Alert <a className="pull-right" href="https://www.taobao.com/">查看详情</a>\n    </Alert>\n\n    <Alert bsStyle="danger">\n    Danger Alert <a className="pull-right" href="https://www.taobao.com/">查看详情</a>\n    </Alert>\n  </div>\n\t);\nReactDOM.render(alertInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('feedback-alert'));