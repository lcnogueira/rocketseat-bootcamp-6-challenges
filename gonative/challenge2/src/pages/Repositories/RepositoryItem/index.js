import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View>
    <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
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
};

export default RepositoryItem;
