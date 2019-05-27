'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, auth, response }) {
    const data = request.only([
      'username',
      'old_password',
      'password',
      'password_confirmation'
    ])

    let newData = {}

    if (data.old_password) {
      // Compares to see if the "old_password" field matches the password of the logged in user
      const validPassword = await Hash.verify(
        data.old_password,
        auth.user.password
      )
      if (!validPassword) {
        return response.status(401).send({
          error: {
            message: 'The old password is not valid'
          }
        })
      }

      // Compares to see if the new password and the password confirmation match
      if (data.password !== data.password_confirmation) {
        return response.status(401).send({
          error: {
            message:
              'The new password and the password confirmation are different.'
          }
        })
      }

      newData.password = data.password
    }

    if (data.username) {
      newData.username = data.username
    }

    auth.user.merge(newData)

    await auth.user.save()

    return auth.user
  }
}

module.exports = UserController
