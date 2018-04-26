
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('repos', function(table){
		table.increments('id').primary();
		table.string('repoName').unique();
	})
};

exports.down = function(knex, Promise) {
	 return knex.schema.dropTable('repos');
};

// knex migrate:latest
// knex migrate:rollback
