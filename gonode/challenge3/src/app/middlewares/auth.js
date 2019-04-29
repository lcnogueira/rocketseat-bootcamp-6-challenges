const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Remove the word "Bearer" from the token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Add the user id to every request
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(404).json({ error: 'Invalid token' });
  }
};
