import Agricula from 'App/Models/Agricula'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class AgriculaSeeder extends BaseSeeder {
  public async run() {
    await Agricula.createMany([
      {
        name: 'Grupo Bom Futuro',
        products: '[{"name": "Soja", "value": 156.11}]',
        adress: 'Cuiabá-MT',
        annualProduction: '17bi',
        destiny: 'internal / external',
        employees: 5000,
        automationLevel: 'Alto',
      },
      {
        name: 'Grupo Amaggi',
        products: '[{"name": "Soja", "value": 156.11}, {"name": "Milho", "value": 83.59}]',
        adress: 'São Miguel do Iguaçu, Paraná',
        annualProduction: '3,5bi',
        destiny: 'internal / external',
        employees: 5.754,
        automationLevel: 'Alto',
      },
      {
        name: 'SLC Agrícola',
        products:
          '[{"name": "Soja", "value": 156.11}, {"name": "Milho, "value": 83.59},  {"name": "Trigo", "value": 1605.69}]',
        adress: 'Porto Alegre, Rio Grande do Sul',
        annualProduction: '447,2mi',
        destiny: 'internal / external',
        employees: 2.252,
        automationLevel: 'Alto',
      },
    ])
  }
}
