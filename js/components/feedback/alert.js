'use strict';

var Alert = cuz.Alert;

var App = '\nReactDOM.render(\n\t<div>\n\t\t<Alert bsStyle="success">\n\t\tSucess Alert <a  style={{float:"right"}} href="https://www.taobao.com/">查看详情</a>\n\t\t</Alert>\n\t\t<Alert bsStyle="info">\n\t\tInfo Alert <a  style={{float:"right"}} href="https://www.taobao.com/">查看详情</a>\n\t\t</Alert>\n\t\t<Alert bsStyle="warning">\n\t\tWarning Alert <a style={{float:"right"}}href="https://www.taobao.com/">查看详情</a>\n\t\t</Alert>\n\t\t<Alert bsStyle="danger">\n\t\tDanger Alert <a style={{float:"right"}} href="https://www.taobao.com/">查看详情</a>\n\t\t</Alert>\n\t</div>,\n\tmountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('feedback-alert'));