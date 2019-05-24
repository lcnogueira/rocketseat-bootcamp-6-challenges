'use strict'

const Event = use('App/Models/Event')
const moment = require('moment')
const Kue = use('Kue')
const Job = use('App/Jobs/SharedEventMail')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const { page, date } = request.get()

    const events = Event.query()
      .with('user')
      .whereRaw(`"time"::date = ?`, date)
      .paginate(page)

    return events
  }

  /**
   * Create/save a new event.
   * POST events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.all(['title', 'place', 'time'])

    const event = await Event.create({ ...data, user_id: auth.user.id })

    return event
  }

  /**
   * Display a single event.
   * GET events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, auth }) {
    try {
      const event = await Event.findOrFail(params.id)

      if (event.user_id !== auth.user.id) {
        return response.status(401).send({
          error: {
            message: 'Only the event owner can see it.'
          }
        })
      }
      return event
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Event not found' } })
    }
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (event.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Only the event owner can delete it.'
        }
      })
    }

    await event.delete()
  }

  async share ({ params, request, response, auth }) {
    try {
      const event = await Event.findOrFail(params.id)

      if (event.user_id !== auth.user.id) {
        return response.status(401).send({
          error: {
            message: 'Just the event owner can share it'
          }
        })
      }

      event.formatted_date = moment(event.time).format('YYYY-MM-DD')
      event.formatted_time = moment(event.time).format('LTS')

      const email = request.input('email')

      Kue.dispatch(
        Job.key,
        { email, event, sender: auth.user },
        { attempts: 3 }
      )
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Event not found' } })
    }
  }
}

module.exports = EventController