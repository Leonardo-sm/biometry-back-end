import Database from '@ioc:Adonis/Lucid/Database'
import Drive from '@ioc:Adonis/Core/Drive'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ params }: HttpContextContract) {
    const [user] = await Database.query().select('*').from('users').where('email', params.email)
    const imageUrl = await Drive.getUrl(user.image_path)
    return { ...user, image_path: imageUrl }
  }
}
