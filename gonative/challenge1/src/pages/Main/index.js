import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Post from '~/components/Post';

import styles from './styles';

import { fakePosts } from '~/seeders';

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>GoNative - Challenge 1</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Main;
