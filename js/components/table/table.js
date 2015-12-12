'use strict';

var Table = cuz.Table;
var Column = cuz.Column;
var Cell = cuz.Cell;

var App = '\nconst tableInstance = (\n    <Table\n    rowsCount={5}\n    rowHeight={50}\n    width={600}\n    headerHeight={50}\n    maxHeight={1000}>\n      <Column\n        header={<Cell>名称</Cell>}\n        cell={<Cell>Basic content one</Cell>}\n        width={200}/>\n      <Column\n        header={<Cell>价格</Cell>}\n        cell={<Cell>Basic content two</Cell>}\n        width={200}/>\n      <Column\n        columnKey="three"\n        header={<Cell >类别代码</Cell>}\n        cell={<Cell>Basic content three</Cell>}\n        width={200}/>\n   </Table>\n  );\n\nReactDOM.render(\n  tableInstance,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('table-default'));