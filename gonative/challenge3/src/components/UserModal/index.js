import React, { useState } from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UsersActions } from '~/store/ducks/users';

import {
  Container,
  ContentContainer,
  Title,
  TextInput,
  Error,
  ButtonContainerView,
  CancelButton,
  SubmitButton,
  ButtonText,
} from './styles';

function UserModal({
  modal, users, hideModal, addUserRequest, modal: { coord },
}) {
  const [input, setInput] = useState('');

  function closeModal() {
    hideModal();
    setInput('');
  }

  function submitUser() {
    addUserRequest(input, coord);
    // setInput('');
  }

  return (
    <Modal visible={modal.visible} transparent animationType="slide" onRequestClose={closeModal}>
      <Container>
        <ContentContainer>
          <Title>Add a new developer</Title>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Github user"
            placeholderTextColor="#DDD"
          />
          {users.error && <Error>{users.error}</Error>}
          <ButtonContainerView>
            <CancelButton onPress={closeModal}>
              <ButtonText>Cancel</ButtonText>
            </CancelButton>
            <SubmitButton onPress={submitUser} disabled={!input}>
              {users.loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Save</ButtonText>
              )}
            </SubmitButton>
          </ButtonContainerView>
        </ContentContainer>
      </Container>
    </Modal>
  );
}

UserModal.propTypes = {
  modal: PropTypes.shape({}).isRequired,
  users: PropTypes.shape({}).isRequired,
  hideModal: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ modal, users }) => ({
  modal,
  users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UsersActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserModal);
