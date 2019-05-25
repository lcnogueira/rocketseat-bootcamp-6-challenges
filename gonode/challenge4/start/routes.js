'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Create a User
Route.post('users', 'UserController.store').validator('User')

// Create a Session
Route.post('sessions', 'SessionController.store').validator('Session')

// Passwords
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

// Protected routes
Route.group(() => {
  // Events
  Route.resource('events', 'EventController')
    .apiOnly()
    .validator(new Map([[['events.store'], ['Event']]]))

  Route.post('events/:id/share', 'EventController.share')

  // Update user information
  Route.put('users', 'UserController.update')
}).middleware(['auth'])
