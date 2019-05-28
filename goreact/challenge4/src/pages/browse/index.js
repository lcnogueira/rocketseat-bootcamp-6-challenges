import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist href="">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Old Rock</strong>
        <p>Relax while programming by listening the best of the world rock</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Old Rock</strong>
        <p>Relax while programming by listening the best of the world rock</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Old Rock</strong>
        <p>Relax while programming by listening the best of the world rock</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Old Rock</strong>
        <p>Relax while programming by listening the best of the world rock</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
