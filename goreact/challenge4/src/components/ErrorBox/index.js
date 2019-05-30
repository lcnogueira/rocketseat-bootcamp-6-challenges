import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import { Container } from './styles';

import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  {<p>{message}</p>}
  <button type="button" onClick={hideError}>
    <img src={CloseIcon} alt="Close" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = ({ error }) => ({ error });

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
