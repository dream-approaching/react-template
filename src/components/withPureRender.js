import React from 'react';
import { isEqual } from 'utils/utils';
import ErrorBoundary from 'components/errorBoundary/errorBoundary';
import { is } from 'immutable';

const withPureRender = Component => {
  class Hoc extends Component {
    // 覆写父组件的生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
      return this.pureRenderType1(nextProps, nextState);
      // return this.pureRenderType2(nextProps, nextState); // 两种方式
    }

    pureRenderType1 = (nextProps, nextState) => {
      if (!isEqual(this.props, nextProps) || !isEqual(this.state, nextState)) {
        return true;
      }
      return false;
    };

    pureRenderType2 = (nextProps, nextState) => {
      const thisProps = this.props || {};
      const thisState = this.state || {};

      if (
        Object.keys(thisProps).length !== Object.keys(nextProps).length ||
        Object.keys(thisState).length !== Object.keys(nextState).length
      ) {
        return true;
      }

      for (const key in nextProps) {
        if (!is(thisProps[key], nextProps[key])) {
          return true;
        }
      }

      for (const key in nextState) {
        if (thisState[key] !== nextState[key] && !is(thisState[key], nextState[key])) {
          return true;
        }
      }
      return false;
    };

    render() {
      return <ErrorBoundary>{super.render()}</ErrorBoundary>;
    }
  }

  // 约定：包装显示名字以便于调试
  Hoc.displayName = `withPureRender(${Component.displayName || Component.name || 'Component'})`;

  return Hoc;
};

export default withPureRender;
