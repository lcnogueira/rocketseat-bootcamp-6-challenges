import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({
  post: {
    avatar, author, time, content,
  },
}) => (
  <div className="post">
    <PostHeader avatar={avatar} author={author} time={time} />
    <p className="post-content">{content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
