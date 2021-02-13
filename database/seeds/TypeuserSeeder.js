'use strict'

const Database = use('Database')

class TypeuserSeeder {
  async run () {
    await Database.table('type_users').insert(
      {
        name: 'Administrador'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'Gerente'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'Funcionario'
      }
    )
  }
}

module.exports = TypeuserSeeder
