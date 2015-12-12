'use strict';

var Tooltip = cuz.Tooltip;
var OverlayTrigger = cuz.OverlayTrigger;
var Button = cuz.Button;

var App = '\nReactDOM.render(\n  <div>\n    <OverlayTrigger placement="right" overlay={<Tooltip id="test2" placement="bottom" >\n                  And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n                </Tooltip>}>\n      <i className="fa fa-question-circle"></i>  \n    </OverlayTrigger>\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('tip-overlayTrigger'));