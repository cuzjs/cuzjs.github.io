'use strict';

var Select = cuz.Select;

var App = '\nconst optionsData = [\n\t{value: \'one\',label:\'One\'},\n\t{value: \'two\',label: \'Two\'},\n\t{value: \'three\',label: \'Three\'}\n];\n\nReactDOM.render(\n  <Select\n      name="base-select"\n      value="one"\n      clearable={false}\n      options={optionsData}\n      onChange={function(val){console.log(val)}}\n  />,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('select-default'));