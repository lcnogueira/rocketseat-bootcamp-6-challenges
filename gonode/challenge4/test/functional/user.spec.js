'use strict'

const { test, trait, afterEach } = use('Test/Suite')('User registration')

const User = use('App/Models/User')
// const Mail = use('Mail')

trait('Test/ApiClient')

afterEach(async () => {
  await User.query().delete()
})

test('Create an user', async ({ assert, client }) => {
  // Mail.fake()

  const response = await client
    .post('/users')
    .send({
      username: 'lcnogueira',
      email: 'luizcns18@gmail.com',
      password: '123456',
      password_confirmation: '123456'
    })
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    username: 'lcnogueira',
    email: 'luizcns18@gmail.com'
  })

  const user = await User.findBy('username', 'lcnogueira')
  assert.equal(user.toJSON().email, 'luizcns18@gmail.com')

  // Mail.restore()
})

test('Dont create a new user', async ({ client, assert }) => {
  const response = await client.post('/users').end()

  // Validation error that is thrown by the default handler (Handler.js)
  response.assertStatus(400)

  const user = await User.findBy('email', 'luizcns18@gmail.com')
  assert.isNull(user)
})
