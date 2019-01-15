import React from 'react';
import { connect } from 'react-redux';
import actions from '@redux/calculator/actions';
import styles from './style.scss';

class Home extends React.Component {
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
      </div>
    );
  }
}

const mapStateToProps = ({ calculator, global }) => ({ calculator, global });

const mapDispatchToProps = {
  increase: actions.increase,
  decrease: actions.decrease,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
