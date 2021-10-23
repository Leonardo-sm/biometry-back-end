import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdmsController {
  public async index({ params, response }: HttpContextContract) {
    if (params.permission === 'admin' || params.permission === 'minister') {
      const data = await Database.query().from('supervisors').select('*')
      return data
    } else {
      response.status(401)
    }
  }
}
