module.exports = (req, res, next) => {
  const { age } = req.query;

  return age ? next() : res.redirect('/');
};
