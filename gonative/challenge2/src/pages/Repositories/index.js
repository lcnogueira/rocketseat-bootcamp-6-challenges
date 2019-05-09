import React, { Component } from 'react';
import {
  View, ActivityIndicator, FlatList, TextInput, TouchableOpacity, Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import RepositoryItem from './RepositoryItem';
import api from '~/services/api';

import styles from './styles';
import { colors } from '~/styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repos: [],
    loading: true,
    refreshing: false,
    repoInput: '',
    error: false,
  };

  componentDidMount() {
    this.loadRepos();
  }

  saveToLocal = async (repos) => {
    await AsyncStorage.setItem('GitIssues:repositories', JSON.stringify(repos));
  };

  saveRepo = async () => {
    const { repoInput, repos } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await api.get(`/repos/${repoInput}`);
      const localRepo = {
        id: data.id,
        name: data.name,
        organization: data.owner.login,
        avatar: data.owner.avatar_url,
      };

      const totalRepos = [...repos, localRepo];
      await this.saveToLocal(totalRepos);

      this.setState({
        repos: totalRepos,
        repoInput: '',
        loading: false,
        error: false,
      });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  loadRepos = async () => {
    this.setState({ refreshing: true });
    const repos = JSON.parse(await AsyncStorage.getItem('GitIssues:repositories'));

    this.setState({ repos: repos || [], loading: false, refreshing: false });
  };

  renderList = () => {
    const { repos, refreshing } = this.state;

    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        onRefresh={this.loadRepos}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const {
      loading, repoInput, repos, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add repository (e.g. 'facebook/react')"
            autoCapitalize="none"
            autoCorrect={false}
            value={repoInput}
            onChangeText={text => this.setState({ repoInput: text, error: false })}
            style={styles.repoInput}
          />
          <TouchableOpacity onPress={this.saveRepo}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.dark} />
            ) : (
              <Icon name="plus" size={20} styles={styles.inputIcon} />
            )}
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.error}>Ocorreu um erro. Tente novamente</Text>}
        <View style={styles.reposContainer}>{repos && this.renderList()}</View>
      </View>
    );
  }
}
