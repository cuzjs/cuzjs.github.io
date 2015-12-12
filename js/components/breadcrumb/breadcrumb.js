'use strict';

var Breadcrumb = cuz.Breadcrumb;
var BreadcrumbItem = cuz.BreadcrumbItem;

var App = '\nReactDOM.render(\n  <div>\n    <Breadcrumb>\n      <BreadcrumbItem href="#">首页</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">数据纵横</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">商品分析</BreadcrumbItem>\n      <BreadcrumbItem active>商品列表</BreadcrumbItem>\n    </Breadcrumb>\n\n    <Breadcrumb>\n      <BreadcrumbItem href="#">首页</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">数据纵横</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">商品分析1</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">商品分析2</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">商品分析3</BreadcrumbItem>\n      <BreadcrumbItem href="http://getbootstrap.com/">商品分析4</BreadcrumbItem>\n      <BreadcrumbItem active>商品列表</BreadcrumbItem>\n    </Breadcrumb>\n  </div>,\n  mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('example-default'));