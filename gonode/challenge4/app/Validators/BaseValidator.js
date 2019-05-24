'use strict'

class BaseValidator {
  // Validate all the fields and send all the error messages. Not only the first wrong one.
  get validateAll () {
    return true
  }
}

module.exports = BaseValidator
