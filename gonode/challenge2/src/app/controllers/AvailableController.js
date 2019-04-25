const moment = require('moment');
const { Op } = require('sequelize');
const { Appointment } = require('../models');

class AvailableController {
  async index (req, res) {
    // Date selected bu the user
    const date = moment(parseInt(req.query.date));

    // All of the appointments from the chosen provider
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.provider,
        date: {
          [Op.between]: [
            date.startOf('day').format(),
            date.endOf('day').format()
          ]
        }
      }
    });

    // All POSSIBLE time spots
    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00'
    ];

    // All AVAILABLE time spots
    const available = schedule.map(time => {
      const [hour, minute] = time.split(':');
      // Format the date that was selected by the user
      const value = date
        .hour(hour)
        .minute(minute)
        .second(0);

      return {
        time,
        value: value.format(),
        // The time is available if it's after now and there's no scheduled user at that time
        available:
          value.isAfter(moment()) &&
          !appointments.find(a => moment(a.date).format('HH:mm') === time)
      };
    });

    return res.render('available/index', { available });
  }
}

module.exports = new AvailableController();
