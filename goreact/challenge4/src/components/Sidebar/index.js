import React from 'react';

import { Container, NewPlayList, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Browse</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>YOUR LIBRARY</span>
        </li>
        <li>
          <a href="">Made for you</a>
        </li>
        <li>
          <a href="">Recently Played</a>
        </li>
        <li>
          <a href="">Favorite Songs</a>
        </li>
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Artists</a>
        </li>
        <li>
          <a href="">Stations</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Electronic Music</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlaylistIcon} alt="Add playlist" />
      New Playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
