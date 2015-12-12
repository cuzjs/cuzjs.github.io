'use strict';

var Table = cuz.Table;
var Column = cuz.Column;
var Cell = cuz.Cell;

var App = '\nconst MyTable = React.createClass({\n  sortMyTable(ColumnKey,sortType){\n      console.log("这里是对表格数据处理的函数，例如发送 Ajax 请求给后台。");\n  },\n  render: function() {\n    return (\n      <Table\n      rowsCount={5}\n      rowHeight={50}\n      width={600}\n      headerHeight={50}\n      maxHeight={1000}\n      defaultSortColumn="one"\n      defaultSortType="asc"\n      onSortChange={this.sortMyTable.bind(this)}>\n        <Column\n          columnKey="one"\n          header={<Cell sortable>名称</Cell>}\n          cell={<Cell>Basic content one</Cell>}\n          width={200}/>\n        <Column\n          columnKey="two"\n          header={<Cell sortable>价格</Cell>}\n          cell={<Cell>Basic content two</Cell>}\n          width={200}/>\n        <Column\n          columnKey="three"\n          header={<Cell >类别代码</Cell>}\n          cell={<Cell>Basic content three</Cell>}\n          width={200}/>\n   </Table>\n      );\n  }\n});\n\n\nReactDOM.render(\n  <MyTable />,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('table-sort'));