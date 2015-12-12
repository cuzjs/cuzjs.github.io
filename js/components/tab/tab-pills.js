'use strict';

var Tab = cuz.Tab;
var Tabs = cuz.Tabs;

var App = '\nReactDOM.render(\n  <Tabs defaultActiviteKey={2} animation={false} bsStyle="pills" >\n    <Tab eventKey={1} title="Home" > Home </Tab>\n    <Tab eventKey={2} title="Profile" > Profile </Tab>\n    <Tab eventKey={3} title="Messages" > Messages </Tab>\n    <Tab eventKey={4} title="Action Logs" disabled >TAction Logs </Tab>\n  </Tabs>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('tab-pills'));