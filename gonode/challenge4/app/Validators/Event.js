'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Event extends BaseValidator {
  get rules () {
    return {
      title: 'required',
      place: 'required',
      time: 'required|date'
    }
  }
}

module.exports = Event
