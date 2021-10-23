import Database from '@ioc:Adonis/Lucid/Database'

export default class PublicsController {
  public async index() {
    const data = await Database.query().from('agriculas').select('*')

    return await data
  }
}
