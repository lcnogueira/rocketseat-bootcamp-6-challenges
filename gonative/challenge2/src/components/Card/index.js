import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({
  avatarUrl, title, subtitle, onPress, onLongPress,
}) => (
  <View>
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} onLongPress={onLongPress}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <View style={styles.text}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

Card.defaultProps = {
  onLongPress: () => {},
};

Card.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
};

export default Card;
