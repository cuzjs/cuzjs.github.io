'use strict';

var Calendar = cuz.Calendar;

var App = '\nReactDOM.render(<Calendar />,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('calendar-default'));