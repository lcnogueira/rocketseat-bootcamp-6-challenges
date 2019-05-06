import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';

import './style.css';

Modal.setAppElement(document.getElementById('root'));

class UserModal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      show: PropTypes.bool,
      coord: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    user: '',
  };

  resetState = () => this.setState({ user: '' });

  closeModal = () => {
    this.props.hideModal();
    this.resetState();
  };

  submitUser = (e) => {
    e.preventDefault();

    const { user } = this.state;

    if (!user) {
      toast.error('Set a github username');
      return;
    }

    const { latitude, longitude } = this.props.modal.coord;

    this.props.addUserRequest({ user, coord: { latitude, longitude } });
    this.resetState();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modal.show}
        onRequestClose={this.closeModal}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Add a github user</h2>
        <form onSubmit={this.submitUser} className="modal-form">
          <input
            type="text"
            placeholder="Github User"
            onChange={e => this.setState({ user: e.target.value })}
          />
          <div className="modal-buttons">
            <button type="button" onClick={this.closeModal} className="bg-danger">
              Cancel
            </button>
            <button type="submit" className="bg-primary">
              Send
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStToProps = ({ modal }) => ({ modal });

const mapDispToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStToProps,
  mapDispToProps,
)(UserModal);
