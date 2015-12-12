'use strict';

var Modal = cuz.Modal;
var Button = cuz.Button;

var App = '\nconst ModalInstance = React.createClass({\n\n  getInitialState() {\n    return {showModal: false};\n  },\n\n  close() {\n    this.setState({showModal: false});\n  },\n\n  open() {\n    this.setState({showModal: true});\n  },\n\n  makeSure() {\n    console.log(\'点击 Modal 的确定按钮.\');\n    this.setState({showModal: false});\n  },\n\n  render() {\n    return (\n      <div>\n        <p>点击按钮显示 Modal !</p>\n\n        <Button bsStyle="primary" onClick={this.open}>show modal</Button>\n\n        <Modal show={this.state.showModal} onHide={this.close}>\n          <Modal.Header closeButton>\n            <Modal.Title> 这里是标题</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <p>连雨不知春去,一晴方觉夏深.</p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button bsSize=\'small\' onClick={this. makeSure}>确定</Button>\n            <Button bsSize=\'small\' onClick={this.close}>取消</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n      );\n  }\n});\n\nReactDOM.render(<ModalInstance />, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('modal-default'));