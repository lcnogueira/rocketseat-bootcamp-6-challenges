import React, { Component } from 'react';
import {
  View, StatusBar, FlatList, ActivityIndicator, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import IssueItem from './IssueItem';
import IssueFilter from './IssueFilter';
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
    issuesStateList: ['all', 'open', 'closed'],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  filterIssues = async (selectedState) => {
    this.setState({ loading: true, issuesState: selectedState });

    const { navigation } = this.props;

    const repoFullName = navigation.getParam('repoFullName');

    try {
      const issues = await getIssues(repoFullName, selectedState);
      this.setState({ issues, error: false });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

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
      return <Text style={styles.empty}>There are no issues in this repo.</Text>;
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
    const {
      loading, error, issues, issuesState, issuesStateList,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {error && <Text style={styles.error}>An error occurred. Try again</Text>}

        {!!issues.length && (
          <IssueFilter
            selectedState={issuesState}
            states={issuesStateList}
            switchState={this.filterIssues}
          />
        )}

        {loading ? <ActivityIndicator style={styles.loading} size="large" /> : this.renderList()}
      </View>
    );
  }
}
