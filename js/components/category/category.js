'use strict';

var Category = cuz.Category;

var App = '\nconst jsonData=[\n\t      {\n\t        name: \'cname1\',\n\t        id: 1,\n\t        children: [{\n\t          name: \'c21\',\n\t          id: 2,\n\t          children: [{\n\t            name: \'c31\',\n\t            id: 3\n\t          }, {\n\t            name: \'c31\',\n\t            id: 5\n\t          }, {\n\t            name: \'c31\',\n\t            id: 6\n\t          }]\n\t        }, {\n\t          name: \'c22\',\n\t          id: 22,\n\t          children: [{\n\t            name: \'c321\',\n\t            id: 33\n\t          }]\n\t        }]\n\t      }\n\t    ];\n\nconst categoryInstance = (\n\t<div style={{position:\'relative\',height:\'350px\'}}>\n\t\t<Category\n\t    confirmButton\n\t    cancelButton\n\t    triggerType=\'hover\'\n\t    onSelect={function(key,child,level,event){console.log(child)}}\n\t    data={jsonData}>\n\t</Category>\n\t</div>\n\t);\n\nReactDOM.render(categoryInstance,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('category-default'));