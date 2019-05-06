import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';

import './style.css';

Modal.setAppElement(document.getElementById('root'));

function UserModal({ hideModal, addUserRequest, modal }) {
  const [user, setUser] = useState('');

  function closeModal() {
    hideModal();
    setUser('');
  }

  function submitUser(e) {
    e.preventDefault();

    if (!user) {
      toast.error('Set a github username');
      return;
    }

    const { latitude, longitude } = modal.coord;

    addUserRequest({ user, coord: { latitude, longitude } });
    setUser('');
  }

  return (
    <Modal
      isOpen={modal.show}
      onRequestClose={closeModal}
      contentLabel="Add User Modal"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <h2>Add a github user</h2>
      <form onSubmit={submitUser} className="modal-form">
        <input type="text" placeholder="Github User" onChange={e => setUser(e.target.value)} />
        <div className="modal-buttons">
          <button type="button" onClick={closeModal} className="bg-danger">
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

UserModal.propTypes = {
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

const mapStToProps = ({ modal }) => ({ modal });

const mapDispToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStToProps,
  mapDispToProps,
)(UserModal);
