import React from 'react';
import Modal from 'components/modal/modal';
import styles from './style.scss';

export default class extends React.Component {
  state = {
    showModal: false,
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <div onClick={this.handleShowModal}>click me to showModal</div>
        {showModal && (
          <Modal>
            <div className={styles.modalCon}>
              <div>header</div>
              <div>body</div>
              <div onClick={this.handleHideModal}>关闭</div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
