'use strict'

const moment = require('moment')
const crypto = require('crypto')
const User = use('App/Models/User')

const Kue = use('Kue')
const Job = use('App/Jobs/ForgotPasswordMail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      // Create a token an insert it in the databse
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()

      // Send an e-mail to the user with the information
      Kue.dispatch(
        Job.key,
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },
        { attempts: 3 }
      )
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Something went wrong. Does this email exist?' }
      })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      // Find the user by token or fail
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract(2, 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({
          error: {
            message: 'Token expired'
          }
        })
      }

      // Reset the token fields
      user.token = null
      user.token_created_at = null

      // Set the new password
      user.password = password

      // Save the new password
      await user.save()
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: 'Something went wrong when trying to reset the password'
        }
      })
    }
  }
}

module.exports = ForgotPasswordController
