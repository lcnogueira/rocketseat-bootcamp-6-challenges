import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import { fakePosts } from '../../seeders';

import Post from '../../components/Post';

const Main = () => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {fakePosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  </View>
);

export default Main;
