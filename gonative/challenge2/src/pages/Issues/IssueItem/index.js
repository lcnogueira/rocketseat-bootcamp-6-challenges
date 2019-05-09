import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';

import Card from '~/components/Card';

// import styles from './styles';

const IssuesItem = ({ issue }) => (
  <Card
    avatarUrl={issue.user.avatar_url}
    title={issue.title}
    subtitle={issue.user.login}
    onPress={() => Linking.openURL(issue.html_url)}
  />
);

IssuesItem.propTypes = {
  issue: PropTypes.shape({
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default IssuesItem;
