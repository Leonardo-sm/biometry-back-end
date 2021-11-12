import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pesticedes extends BaseSchema {
  protected tableName = 'pesticedes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('use')
      table.string('status')
      table.string('description')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
