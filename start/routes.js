'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly().validator(new map([
  [['users.store'], ['User']], [['users.update'], ['User']]
]))
Route.resource('/produtos', 'ProdutoController').apiOnly()
