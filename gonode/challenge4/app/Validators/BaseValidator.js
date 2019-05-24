'use strict'

const Antl = use('Antl')

class BaseValidator {
  // Validate all the fields and send all the error messages. Not only the first wrong one.
  get validateAll () {
    return true
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = BaseValidator
