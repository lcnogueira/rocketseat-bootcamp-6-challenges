import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const confirm = (repoName, removeItem) => {
  Alert.alert('Removing repository', `Are you sure you wanna remove "${repoName}"?`, [
    { text: 'Cancel', onPress: () => {} },
    { text: 'Yes', onPress: () => removeItem() },
  ]);
};

const RepositoryItem = ({ repository, removeItem }) => (
  <View>
    <TouchableOpacity
      onPress={() => {}}
      style={styles.buttonContainer}
      onLongPress={() => confirm(repository.name, removeItem)}
    >
      <Image style={styles.avatar} source={{ uri: repository.avatar }} />
      <View style={styles.text}>
        <Text style={styles.repositoryName}>{repository.name}</Text>
        <Text style={styles.organizationName}>{repository.organization}</Text>
      </View>
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    organization: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default RepositoryItem;
