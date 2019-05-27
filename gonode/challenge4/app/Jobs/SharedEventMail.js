'use strict'

const Mail = use('Mail')

class SharedEventMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SharedEventMail-job'
  }

  // This is where the work is done.
  async handle ({ email, event, sender }) {
    await Mail.send(
      ['emails.shared_event'],
      { event, user: sender.username },
      message => {
        message
          .to(email)
          .from(sender.email, sender.username)
          .subject('An event was shared with you')
      }
    )
  }
}

module.exports = SharedEventMail
