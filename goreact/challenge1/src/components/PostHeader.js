import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, author, time }) => (
  <div className="post-header">
    <img className="avatar" src={avatar} alt="Avatar" />
    <div className="post-header-content">
      <h4>{author}</h4>
      <span>{time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
