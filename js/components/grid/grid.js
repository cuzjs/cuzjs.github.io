'use strict';

var Grid = cuz.Grid;
var Row = cuz.Row;
var Col = cuz.Col;

var showGrid = {
  backgroundColor: '#eee',
  border: '1px solid #ddd'
};

var App = '\nconst gridInstance = (\n  <Grid>\n    <Row>\n      <Col style={showGrid} xs={12} md={8}><code>&lt;{\'Col xs={12} md={8}\'} /&gt;</code></Col>\n      <Col style={showGrid} xs={6} md={4}><code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code></Col>\n    </Row>\n\n    <Row>\n      <Col style={showGrid} xs={6} md={4}><code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code></Col>\n      <Col style={showGrid} xs={6} md={4}><code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code></Col>\n      <Col style={showGrid} xs={6} md={4}><code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code></Col>\n    </Row>\n\n    <Row>\n      <Col style={showGrid} xs={6} xsOffset={6}><code>&lt;{\'Col xs={6} xsOffset={6}\'} /&gt;</code></Col>\n    </Row>\n\n    <Row>\n      <Col style={showGrid} md={6} mdPush={6}><code>&lt;{\'Col md={6} mdPush={6}\'} /&gt;</code></Col>\n      <Col style={showGrid} md={6} mdPull={6}><code>&lt;{\'Col md={6} mdPull={6}\'} /&gt;</code></Col>\n    </Row>\n  </Grid>\n  );\n\nReactDOM.render(gridInstance, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('grid-default'));