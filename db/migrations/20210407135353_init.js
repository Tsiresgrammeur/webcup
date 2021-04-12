
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
    .createTable('Feeds', (table) => {
      table.increments('id');
      table.string('email_user');
      table.string('path_feed');
      table.timestamps('date_feed');
      table.foreign('email_user').references('Manager.email').onDelete().onUpdate();
  })
    .createTable('club_Feed', (table) => {
      table.increments('id');
      table.string('email_user');
      table.string('path_club');
      table.timestamps('date_club');
      table.foreign('email_user').references('Manager.email').onDelete().onUpdate();
});
};

exports.down = function(knex) {
  return knex.schema
          .dropTable('Manager')
          .dropTable('Feeds')
          .dropTable('clubFeeds')
          .dropTable('Waiting')
          .dropTable('Student');
};

