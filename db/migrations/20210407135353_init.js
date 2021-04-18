
exports.up = function(knex) {
  return knex.schema.createTable('Student', (table) => {
    table.string('num_mat').primary();
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('level');
    table.string('course');
    table.string('password');
  })
    .createTable('Manager', (table) => {
    table.string('num_mat').primary();
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('password');
    table.string('status');
  })
    .createTable('Waiting', (table) => {
    table.string('num_mat').primary();
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('level');
    table.string('course');
    table.string('password');
  })
    .createTable('Groups', (table) => {
      table.increments('id');
      table.string('group_name').notNullable().unique();
  })
    .createTable('Categories', (table) => {
      table.increments('id');
      table.integer('id_group');
      table.string('id_user');
      table.string('description',400);
      table.string('title');
      table.date('date');
      table.foreign('id_group').references('Groups.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('id_user').references('Manager.num_mat').onDelete('CASCADE').onUpdate('CASCADE');
  })
    .createTable('Offer', (table) => {
      table.increments('id');
      table.integer('id_group');
      table.string('id_user');
      table.string('description',400);
      table.date('date');
      table.string('interested', 1000);
      table.foreign('id_group').references('Groups.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('id_user').references('Manager.num_mat').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
          .dropTable('Manager')
          .dropTable('Categories')
          .dropTable('Offer')
          .dropTable('Waiting')
          .dropTable('Student')
          .dropTable('Groups');
};

