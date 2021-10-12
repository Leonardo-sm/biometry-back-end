import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get("/public", "PublicsController.index")
  Route.get("/adm/:id", "AdmsController.index")
  Route.get("/minister/:id", "MinistersController.index")
}).prefix("data")

Route.group(() => {
  Route.get("/user/:email", "UsersController.index")
}).prefix("users")
