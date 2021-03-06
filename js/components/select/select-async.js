'use strict';

var Select = cuz.Select;

var App = '\nlet getOptions = function(input, callback) {\n    setTimeout(function() {\n        callback(null, {\n            options:[\n              {value: \'one\',label:\'One\'},\n              {value: \'two\',label: \'Two\'},\n              {value: \'three\',label: \'Three\'},\n              {value: \'four\',label: \'Four\'},\n              {value: \'five\',label: \'Five\'},\n              {value: \'six\',label: \'Six\'}\n            ],\n            complete: true\n        });\n    }, 1500);\n};\n\n\nconst SelectMultiInstance = React.createClass({\n\n  render() {\n    return (\n      <div>\n        <h3>AsyncSelect</h3>\n        <Select\n          multi\n          allowCreate={true}\n          addLabelText ="添加新选项"\n          ref="stateSelect"\n          name="base-select"\n          value="one"\n          asyncOptions={getOptions}\n          onChange={function(val){console.log(val)}}\n        />\n      </div>\n      );\n  }\n});\n\nReactDOM.render(\n  <SelectMultiInstance />,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('select-async'));