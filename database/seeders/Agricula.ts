import Agricula from 'App/Models/Agricula'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class AgriculaSeeder extends BaseSeeder {
  public async run() {
    await Agricula.createMany([
      {
        name: 'Produtora 1',
        products: '[{"name": "Produto 1", "value": 50}, {"name": "Produto 2", "value": 250}]',
        adress: 'Endereço 1',
        annualProduction: 5000,
        destiny: 'internal',
        employees: 20,
        automationLevel: 3,
      },
      {
        name: 'Produtora 2',
        products: '[{"name": "Produto 1", "value": 50}, {"name": "Produto 2", "value": 250}]',
        adress: 'Endereço 2',
        annualProduction: 10000,
        destiny: 'external',
        employees: 8,
        automationLevel: 2,
      },
    ])
  }
}
