import React from 'react';

import { StatusBar } from 'react-native';

import Map from '~/components/Map';
import UserModal from '~/components/UserModal';

import { Container } from './styles';

const Main = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <Map />
    <UserModal />
  </Container>
);

export default Main;
