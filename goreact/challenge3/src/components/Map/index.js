import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import './style.css';

class Map extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        login: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string,
        coord: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      }),
    ).isRequired,
    template: PropTypes.string.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      zoom: 15,
    },
  };

  componentDidMount() {
    // Get the current position
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      // TODO: make the user input dynamic
      this.props.addUserRequest({
        user: process.env.REACT_APP_GITHUB_USER,
        coord: { latitude, longitude },
      });
      this.setState({
        viewport: {
          ...this.state.viewport,
          latitude,
          longitude,
        },
      });
    });
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.props.addUserRequest({ user: 'diego3g', coord: { latitude, longitude } });
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle={`mapbox://styles/mapbox/${this.props.template}`}
        onClick={this.handleMapClick}
      >
        {this.props.users.map(user => (
          <Marker latitude={user.coord.latitude} longitude={user.coord.longitude} key={user.id}>
            <img className="avatar" alt={`${user.name} Avatar`} src={user.avatar} />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

const mapStToProps = ({ users, templates }) => ({ users: users.data, template: templates.choosen });

const mapDispToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStToProps,
  mapDispToProps,
)(Map);
