import React from 'react';
import { connect } from 'react-redux';
import actions from '@redux/calculator/actions';
import styles from './style.scss';

class Home extends React.Component {
  handleClick = type => {
    const { increase, decrease } = this.props;
    if (type === '-') {
      decrease();
    } else {
      increase();
    }
  };

  render() {
    const { calculator } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.btn} onClick={() => this.handleClick('-')}>
          -
        </div>
        <div className={styles.value}>{calculator.value}</div>
        <div className={styles.btn} onClick={() => this.handleClick('+')}>
          +
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculator: state.calculator,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(actions.increase()),
    decrease: () => dispatch(actions.decrease()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
