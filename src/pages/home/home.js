import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import actions from '@redux/calculator/actions';
import withPureRender from 'components/withPureRender';
import { Button, Icon } from 'antd';
import FunctionTest from './components/functionTest/index';
import ClassTest from './components/classTest/index';
import styles from './style.scss';

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

  render() {
    const { calculator, global } = this.props;
    console.log('home render');
    const { test } = this.state;
    return (
      <div className={styles.containerAll}>
        <div className={styles.btnContainer}>
          <Button className={styles.btn} onClick={() => this.handleClick('-')}>
            -
          </Button>
          <div className={styles.value}>{calculator.value}</div>
          <div className={styles.btn} onClick={() => this.handleClick('+')}>
            +
          </div>
        </div>
        <Icon type="star" theme="filled" />
        <div className={styles.result}>loading: {global.globalLoading ? 'true' : 'false'}</div>
        <div className={styles.result}>results: {calculator.result}</div>
        <div className={styles.result}>test: {test}</div>
        <FunctionTest />
        <ClassTest />
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
