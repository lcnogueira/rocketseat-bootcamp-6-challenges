import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorActions from '~/store/ducks/error';

import {
  Container, Error, DeleteButton, DeleteIcon,
} from './styles';

const ErrorMessage = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <Error>{message}</Error>
  <DeleteButton onPress={hideError}>
    <DeleteIcon />
  </DeleteButton>
</Container>
);

ErrorMessage.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);
