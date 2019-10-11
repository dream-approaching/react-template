import React from 'react';

class FancyButton3 extends React.PureComponent {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
  }

  render() {
    return <input ref={this.textInput} type="text" />;
  }
}

export default FancyButton3;
