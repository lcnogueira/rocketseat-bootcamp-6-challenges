import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" name="search" />
    </Search>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/12154623?v=4" alt="Avatar" />
      Luiz Cláudio
    </User>
  </Container>
);

export default Header;
