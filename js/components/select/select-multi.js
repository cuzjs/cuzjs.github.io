'use strict';

var Select = cuz.Select;

var App = '\nconst SelectMultiInstance = React.createClass({\n\n  render() {\n    const selectMulti = [\n      {value: \'one\',label:\'One\'},\n      {value: \'two\',label: \'Two\'},\n      {value: \'three\',label: \'Three\',disabled:true},\n      {value: \'four\',label: \'Four\'},\n      {value: \'five\',label: \'Five\'},\n      {value: \'six\',label: \'Six\'}\n    ];\n    return (\n      <div>\n        <h3>MultiSelect</h3>\n        <Select\n          multi\n          ref="stateSelect"\n          name="base-select"\n          value="one"\n          options={selectMulti}\n          onChange={function(val){console.log(val)}}\n        />\n      </div>\n      );\n  }\n});\n\nReactDOM.render(\n  <SelectMultiInstance />,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('select-multi'));