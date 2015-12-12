'use strict';

var Tooltip = cuz.Tooltip;

var App = '\nReactDOM.render(\n  <div style={{position:\'relative\',height:\'50px\'}} >\n    <Tooltip placement="bottom" id="test1" className="in">\n      Tooltip right\n     </Tooltip>  \n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('tip-toolTips'));