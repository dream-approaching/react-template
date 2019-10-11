import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import actions from '@redux/calculator/actions';
import withPureRender from 'components/withPureRender';
import FunctionTest from './components/functionTest/index';
import ClassTest from './components/classTest/index';
import styles from './style.scss';
import FancyButton from './components/fancyButton';
import FancyButton2 from './components/fancyButton2';
import FancyButton3 from './components/fancyButton3';

class Home extends React.Component {
  state = {
    test: 1,
  };

  componentDidMount() {
    this.testTimer = setInterval(() => {
      this.setState({
        test: 2,
      });
    }, 1000);
    this.ref = React.createRef();
    this.ref3 = React.createRef();
  }

  componentWillUnmount() {
    this.testTimer && clearInterval(this.testTimer);
  }

  handleClick = type => {
    const { increase, decrease } = this.props;
    if (type === '-') {
      decrease({
        per_page: 10,
        q: 2,
      });
    } else {
      increase({
        per_page: 10,
        q: 1,
      });
    }
  };

  handleClickButton = () => {
    console.log(this.ref.current);
    this.ref.current.focus();
  };

  handleClickButton2 = () => {
    console.log(this.ref2);
    this.ref2.inputRef.focus();
  };

  handleClickButton3 = () => {
    console.log(this.ref);
    this.ref3.current.textInput.current.focus();
  };

  render() {
    const { calculator, global } = this.props;
    console.log('home render');
    const { test } = this.state;
    return (
      <div className={styles.containerAll}>
        <div className={styles.btnContainer}>
          <div className={styles.btn} onClick={() => this.handleClick('-')}>
            -
          </div>
          <div className={styles.value}>{calculator.value}</div>
          <div className={styles.btn} onClick={() => this.handleClick('+')}>
            +
          </div>
        </div>
        <div className={styles.result}>loading: {global.globalLoading ? 'true' : 'false'}</div>
        <div className={styles.result}>results: {calculator.result}</div>
        <div className={styles.result}>test: {test}</div>
        <FunctionTest />
        <ClassTest />
        {/* createRef + 函数组件 */}
        <FancyButton ref={this.ref} />
        <button type="button" onClick={this.handleClickButton}>
          点我聚焦
        </button>
        {/* 回调ref + class组件 */}
        <FancyButton2 ref={ref => (this.ref2 = ref)} />
        <button type="button" onClick={this.handleClickButton2}>
          点我聚焦2
        </button>
        {/* createRef + class组件 */}
        <FancyButton3 ref={this.ref3} />
        <button type="button" onClick={this.handleClickButton3}>
          点我聚焦3
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ calculator, global }) => ({ calculator, global });

const mapDispatchToProps = {
  increase: actions.increase,
  decrease: actions.decrease,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withPureRender
)(Home);
