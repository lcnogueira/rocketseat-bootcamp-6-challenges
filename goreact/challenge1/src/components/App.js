import React, { Component, Fragment } from 'react';
import Header from './Header';
import Post from './Post';
import { fakePosts } from '../seeders';

class App extends Component {
  state = {
    posts: [...fakePosts],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
