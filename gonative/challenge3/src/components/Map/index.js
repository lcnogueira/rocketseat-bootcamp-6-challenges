import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UserActions } from '~/store/ducks/users';

import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import { AnnotationContainer, AnnotationFill } from './styles';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

class Map extends Component {
  componentDidMount() {
    const { navigation, addUserRequest } = this.props;

    // Gets the logged in user
    const username = navigation.getParam('username', {});

    const coord = {
      latitude: -47.955564,
      longitude: -15.822298,
    };
    addUserRequest(username, coord);
  }

  renderAnnotations = () => (
    <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-47.955564, -15.822298]}>
      <AnnotationContainer>
        <AnnotationFill />
      </AnnotationContainer>
      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  );

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-47.955564, -15.822298]}
        style={{ flex: 1 }}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

Map.propTypes = {
  navigation: PropTypes.shape({
    user: PropTypes.shape({}),
  }).isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Map),
);
