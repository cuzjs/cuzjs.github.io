'use strict';

var Pagination = cuz.Pagination;

var App = '\nconst PaginationBasic = React.createClass({\n  getInitialState() {\n    return {\n      activePage: 1\n    };\n  },\n\n  handleSelect(event, selectedEvent) {\n    this.setState({\n      activePage: selectedEvent.eventKey\n    });\n  },\n\n  render() {\n    return (\n      <div>\n        <Pagination\n        \tprev\n        \tnext\n        \tellipsis\n          items={20}\n          activePage={this.state.activePage}\n          maxButtons={5}\n          onSelect={this.handleSelect} />\n        <br />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<PaginationBasic />, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('pagination-options'));