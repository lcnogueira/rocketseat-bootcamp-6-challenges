import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <Text>Main</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
