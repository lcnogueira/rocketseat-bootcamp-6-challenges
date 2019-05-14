import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UserActions } from '~/store/ducks/users';

import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import { PermissionsAndroid } from 'react-native';

import {
  AnnotationContainer, Avatar, BioText, NameText, CalloutContainer,
} from './styles';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

class Map extends Component {
  state = {
    latitude: 0,
    longitude: 0,
  };

  async componentDidMount() {
    const { navigation, addUserRequest } = this.props;
    // Gets the logged in user
    const username = navigation.getParam('username', {});
    // Get the coords of the logged in user
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // eslint-disable-next-line no-undef
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const coord = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          // Dispatch action
          addUserRequest(username, coord);
          this.setState({ ...coord });
        });
      }
    } catch (err) {
      throw Error(err);
    }
  }

  renderAnnotations = () => {
    const { users } = this.props;
    const annotations = users.data.map(user => (
      <MapboxGL.PointAnnotation
        key={user.id}
        id={String(user.id)}
        coordinate={[user.coord.longitude, user.coord.latitude]}
      >
        <AnnotationContainer>
          <Avatar source={{ uri: user.avatar_url }} />
        </AnnotationContainer>
        <MapboxGL.Callout title={`Name: ${user.login}`}>
          <CalloutContainer>
            <NameText>{user.name}</NameText>
            <BioText>{user.bio}</BioText>
          </CalloutContainer>
        </MapboxGL.Callout>
      </MapboxGL.PointAnnotation>
    ));
    return annotations;
  };

  render() {
    const { latitude, longitude } = this.state;

    return (
      <MapboxGL.MapView
        centerCoordinate={[longitude, latitude]}
        style={{ flex: 1 }}
        // showUserLocation
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
  users: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    coord: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Map),
);
