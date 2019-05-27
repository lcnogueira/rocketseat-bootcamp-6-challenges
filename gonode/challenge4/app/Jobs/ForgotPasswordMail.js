'use strict'

const Mail = use('Mail')

class ForgotPasswordMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'ForgotPasswordMail-job'
  }

  // This is where the work is done.
  async handle ({ email, token, link }) {
    await Mail.send(
      ['emails.forgot_password'],
      { email, token, link },
      message => {
        message
          .to(email)
          .from('contato@rocketseat.com.br', 'Luiz | Rocketseat')
          .subject('Password reset')
      }
    )
  }
}

module.exports = ForgotPasswordMail
