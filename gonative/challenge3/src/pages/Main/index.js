import React from 'react';

import { StatusBar } from 'react-native';

import Map from '~/components/Map';

import { Container } from './styles';

const Main = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <Map />
  </Container>
);

export default Main;
