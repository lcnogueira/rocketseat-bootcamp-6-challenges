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

// Users
Route.post('users', 'UserController.store')

// Sessions
Route.post('sessions', 'SessionController.store')

// Protected routes
Route.group(() => {
  // Events
  Route.post('events', 'EventController.store')
  Route.get('events', 'EventController.index')
  Route.get('events/:id', 'EventController.show')
  Route.delete('events/:id', 'EventController.destroy')

  // Update user information
  Route.put('users', 'UserController.update')
}).middleware(['auth'])
