import { isEqual } from 'utils/utils';

const withPureRender = Component => {
  class Hoc extends Component {
    // 覆写父组件的生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
      if (!isEqual(this.props, nextProps) || !isEqual(this.state, nextState)) {
        return true;
      }
      return false;
    }

    render() {
      return super.render();
    }
  }

  // 约定：包装显示名字以便于调试
  Hoc.displayName = `withPureRender(${Component.displayName || Component.name || 'Component'})`;

  return Hoc;
};

export default withPureRender;
