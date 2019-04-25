const { Appointment, User } = require('../models');
const { Op } = require('sequelize');
const moment = require('moment');

class ScheduleController {
  async index (req, res) {
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      }
    });

    // If there is no appointment at the moment, give the user a message
    if (appointments.length === 0) {
      req.flash('error', 'There is no schedule for today up to this moment.');
      return res.redirect('/app/dashboard');
    }

    return res.render('schedule/index', { appointments });
  }
}

module.exports = new ScheduleController();
