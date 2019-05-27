'use strict'

const { test, trait, afterEach } = use('Test/Suite')('Event')

// const Mail = use('Mail')
const User = use('App/Models/User')
const Event = use('App/Models/Event')

trait('Test/ApiClient')
trait('Auth/Client')

afterEach(async () => {
  await Event.query().delete()
  await User.query().delete()
})

test('List events by date and page', async ({ client }) => {
  const user = await User.create({
    username: 'lcnogueira',
    email: 'luizcns18@gmail.com',
    password: '123456'
  })

  await Event.create({
    title: 'Event test',
    place: 'Brasilia',
    time: '2019-05-30 10:00:00',
    user_id: user.id
  })

  const response = await client
    .get('/events?page=1&date=2019-05-30')
    .loginVia(user)
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    data: [
      {
        title: 'Event test',
        place: 'Brasilia',
        time: '2019-05-30T10:00:00.000Z'
      }
    ]
  })
})
