import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import styles from './styles';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

export default class App extends Component {
  renderAnnotations = () => (
    <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-47.955564, -15.822298]}>
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  );

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-47.955564, -15.822298]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}
