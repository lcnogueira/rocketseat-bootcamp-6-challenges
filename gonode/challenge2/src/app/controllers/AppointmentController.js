const { User, Appointment } = require('../models');

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider);

    return res.render('appointments/create', { provider });
  }
  async store (req, res) {
    // The logged in user
    const { id } = req.session.user;
    // The professional
    const { provider } = req.params;
    // The date which was chosen by the user
    const { date } = req.body;

    // Create the appointment
    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    });

    req.flash('success', 'Your spot was succesfully scheduled.');
    return res.redirect('/app/dashboard');
  }
}

module.exports = new AppointmentController();
