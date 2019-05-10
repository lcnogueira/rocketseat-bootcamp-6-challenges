import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Card from '~/components/Card';

// import styles from './styles';

const confirm = (repoName, removeItem) => {
  Alert.alert('Removing repository', `Are you sure you wanna remove "${repoName}"?`, [
    { text: 'Cancel', onPress: () => {} },
    { text: 'Yes', onPress: () => removeItem() },
  ]);
};

const RepositoryItem = ({ repository, removeItem, navigation }) => (
  <Card
    avatarUrl={repository.avatar}
    title={repository.name}
    subtitle={repository.organization}
    onPress={() => navigation.navigate('Issues', {
      title: repository.name,
      repoFullName: `${repository.organization}/${repository.name}`,
    })
    }
    onLongPress={() => confirm(repository.name, removeItem)}
  />
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    organization: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
