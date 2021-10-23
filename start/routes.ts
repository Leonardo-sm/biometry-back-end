import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/public', 'PublicsController.index')
  Route.get('/adm/:permission', 'AdmsController.index')
  Route.get('/minister/:permission', 'MinistersController.index')
}).prefix('data')

Route.group(() => {
  Route.get('/user/:email', 'UsersController.index')
}).prefix('users')
