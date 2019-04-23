class MainController {
  showForm (req, res) {
    return res.render('start');
  }
  checkAge (req, res) {
    const { age } = req.body;
    res.redirect(`${age >= 18 ? '/major' : '/minor'}?age=${age}`);
  }
  isMinorOrMajor (req, res) {
    const { age } = req.query;
    return res.render(`${age >= 18 ? 'major' : 'minor'}`, { age });
  }
}

module.exports = new MainController();
