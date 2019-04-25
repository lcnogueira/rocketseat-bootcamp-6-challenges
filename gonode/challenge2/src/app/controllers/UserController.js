const { User } = require('../models');

class UserController {
  create (req, res) {
    return res.render('auth/signup');
  }
  async store (req, res) {
    // It Destructures the filename and renames it as "avatar"
    const { filename: avatar } = req.file;

    await User.create({ ...req.body, avatar });

    return res.redirect('/');
  }
}

module.exports = new UserController();
