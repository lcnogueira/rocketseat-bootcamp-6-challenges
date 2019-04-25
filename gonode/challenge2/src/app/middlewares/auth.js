module.exports = (req, res, next) => {
  // If the user is logged in, just keep the common flow
  if (req.session && req.session.user) {
    // It makes the session.user info available for any view built with nunjucks
    res.locals.user = req.session.user;

    return next();
  }

  return res.redirect('/');
};
