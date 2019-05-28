import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlayList, Nav } from './styles';

import Loading from '../Loading';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlayListsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlayListsRequest } = this.props;
    getPlayListsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Browse</Link>
            </li>
            <li>
              <Link to="/">Radio</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <Link to="/">Made for you</Link>
            </li>
            <li>
              <Link to="/">Recently Played</Link>
            </li>
            <li>
              <Link to="/">Favorite Songs</Link>
            </li>
            <li>
              <Link to="/">Albums</Link>
            </li>
            <li>
              <Link to="/">Artists</Link>
            </li>
            <li>
              <Link to="/">Stations</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlaylistIcon} alt="Add playlist" />
          New Playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = ({ playlists }) => ({ playlists });

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
