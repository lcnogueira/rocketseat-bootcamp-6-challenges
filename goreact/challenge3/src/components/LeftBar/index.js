import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import './style.css';

const LeftBar = ({ users, removeUser }) => (
  <div className="left-container">
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div className="user">
            <div className="user-data">
              <img className="avatar" src={user.avatar} alt={`${user.avatar} avatar`} />
              <div className="info">
                <h2>{user.name}</h2>
                <h3>{user.login}</h3>
              </div>
            </div>
            <div className="buttons">
              <button type="button" onClick={() => removeUser(user)}>
                <i className="fa fa-trash-o" aria-hidden="true" />
              </button>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-angle-right go-to-page" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

LeftBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStToProps = ({ users }) => ({ users: users.data });

const mapDispToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStToProps,
  mapDispToProps,
)(LeftBar);
