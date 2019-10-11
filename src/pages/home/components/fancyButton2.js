import React from 'react';

class FancyButton2 extends React.PureComponent {
  state = {
    a: 1,
  };

  componentDidMount() {
    this.setState({
      a: 2,
    });
  }

  render() {
    console.log('FancyButton2', this.state.a);
    return (
      <input
        ref={dom => {
          console.log('refCallback', dom);
          return (this.inputRef = dom);
        }}
        type="text"
      />
    );
  }
}

// class FancyButton2 extends React.PureComponent {
//   state = {
//     a: 1,
//   };

//   componentDidMount() {
//     this.setState({
//       a: 2,
//     });
//   }

//   refCallback = dom => {
//     // 只输出 1 次
//     // <div data-reactroot></div>
//     console.log('refCallback', dom);
//   };

//   render() {
//     console.log('FancyButton2', this.state.a);
//     return <input ref={this.refCallback} type="text" />;
//   }
// }

export default FancyButton2;
