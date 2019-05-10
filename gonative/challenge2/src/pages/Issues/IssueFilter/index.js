import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const IssueFilter = ({ selectedState, states, switchState }) => (
  <View style={styles.filterContainer}>
    {states.map(state => (
      <TouchableOpacity key={state} style={styles.filter} onPress={() => switchState(state)}>
        <Text
          style={
            selectedState === state ? { ...styles.filterText, ...styles.active } : styles.filterText
          }
        >
          {state}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

IssueFilter.propTypes = {
  selectedState: PropTypes.string.isRequired,
  switchState: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(String).isRequired,
};

export default IssueFilter;
