import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'minister@biometry.com',
        permission: 'minister',
        image_path: '',
      },
      {
        email: 'admin@biometry.com',
        permission: 'admin',
        image_path: '',
      },
    ])
  }
}
