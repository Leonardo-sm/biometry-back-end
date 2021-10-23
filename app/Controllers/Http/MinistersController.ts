import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MinistersController {
  public async index({ params, response }: HttpContextContract) {
    if (params.permission === 'minister') {
      const data = await Database.query().from('pesticides').select('*')
      return data
    } else {
      response.status(401)
    }
  }
}
