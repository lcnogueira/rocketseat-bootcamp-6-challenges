import React, { Component } from 'react';
import {
  View, StatusBar, FlatList, ActivityIndicator, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import IssueItem from './IssueItem';
import { getIssues } from '~/utils/ApiUtils';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
    },
    headerRight: <View />,
  });

  state = {
    issues: [],
    issuesState: 'all',
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { issuesState } = this.state;
    const repoFullName = navigation.getParam('repoFullName');

    try {
      const issues = await getIssues(repoFullName, issuesState);

      this.setState({ issues, error: false });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues, refreshing } = this.state;

    if (!issues.length) {
      return <Text style={styles.empty}>No issues Found.</Text>;
    }

    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  render() {
    const { loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {error && <Text style={styles.error}>An error occurred. Try again</Text>}
        {/* TODO: Issues Filer */}
        {loading ? <ActivityIndicator style={styles.loading} size="large" /> : this.renderList()}
      </View>
    );
  }
}
