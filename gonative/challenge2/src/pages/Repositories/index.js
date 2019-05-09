import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getLocalRepos, saveLocalRepos } from '~/utils/AsyncStorageUtils';
import { getRemoteRepo } from '~/utils/ApiUtils';

import RepositoryItem from './RepositoryItem';

import styles from './styles';
import { colors } from '~/styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repos: [],
    loading: false,
    refreshing: false,
    repoInput: '',
    error: false,
  };

  componentDidMount() {
    this.loadRepos();
  }

  removeItem = async (remove) => {
    const allRepos = await getLocalRepos();
    const filteredRepos = allRepos.filter(repo => repo.id !== remove.id);
    await saveLocalRepos(filteredRepos);
    this.setState({ repos: filteredRepos });
  };

  saveRepo = async () => {
    const { repoInput, repos } = this.state;
    this.setState({ loading: true });
    try {
      const remoteRepo = await getRemoteRepo(repoInput);
      const newRepo = {
        id: remoteRepo.id,
        name: remoteRepo.name,
        organization: remoteRepo.owner.login,
        avatar: remoteRepo.owner.avatar_url,
      };

      const totalRepos = [...repos, newRepo];
      await saveLocalRepos(totalRepos);

      this.setState({
        repos: totalRepos,
        repoInput: '',
        error: false,
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  loadRepos = async () => {
    this.setState({ refreshing: true });
    const localRepos = await getLocalRepos();

    this.setState({ repos: localRepos || [], refreshing: false });
  };

  renderList = () => {
    const { repos, refreshing } = this.state;

    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <RepositoryItem repository={item} removeItem={() => this.removeItem(item)} />
        )}
        onRefresh={this.loadRepos}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  render() {
    const {
      loading, repoInput, repos, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
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
        {error && <Text style={styles.error}>An error occurred. Try again.</Text>}
        <View style={styles.reposContainer}>{repos && this.renderList()}</View>
      </View>
    );
  }
}
