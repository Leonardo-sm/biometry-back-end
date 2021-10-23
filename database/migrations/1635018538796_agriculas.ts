import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Agriculas extends BaseSchema {
  protected tableName = 'agriculas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.json('products')
      table.string('adress')
      table.integer('annual_production')
      table.string('destiny')
      table.integer('employees')
      table.integer('automation_level')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
