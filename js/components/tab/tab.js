'use strict';

var Tab = cuz.Tab;
var Tabs = cuz.Tabs;

var App = '\nconst tabsInstance = (\n  <Tabs defaultActiveKey={2} animation={false}>\n    <Tab eventKey={1} title="Home"> Home </Tab>\n    <Tab eventKey={2} title="Profile"> Profile </Tab>\n    <Tab eventKey={3} title="Messages" disabled> Messages</Tab>\n    <Tab eventKey={4} title="Action Logs" disabled> Action Logs</Tab>\n  </Tabs>\n);\n\nReactDOM.render(tabsInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));