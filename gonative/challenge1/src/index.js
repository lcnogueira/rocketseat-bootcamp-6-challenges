import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text>Main</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
