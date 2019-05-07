import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import { fakePosts } from '../../seeders';

import Post from '../../components/Post';

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Main;
