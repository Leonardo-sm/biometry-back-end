import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ params }: HttpContextContract) {
    const user = await Database.query().select('*').from('users').where('email', params.email)
    return user
  }
}
