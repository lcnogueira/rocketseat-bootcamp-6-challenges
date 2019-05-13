import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '~/store/actions/login';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

class Login extends Component {
  static propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { error, loading } = this.props;

    return (
      <Container>
        {error && <Error>User not found.</Error>}
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your username"
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
