import React from 'react';

class Component extends React.Component {
  static defaultProps = {
    text: 111,
  };

  render() {
    const { text = '333' } = this.props;
    return <div>{text}</div>;
  }
}

Component.defaultProps = {
  text: 222,
};

export default Component;
