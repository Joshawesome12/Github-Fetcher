
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('repos', function(table){
		table.increments('id').primary();
		table.string('userName');
		table.integer('repoId');
		table.string('repoName');
		table.string('repoUrl');
		table.integer('numStars');
		table.unique('repoId');
	})
};

exports.down = function(knex, Promise) {
	 return knex.schema.dropTable('repos');
};

// knex migrate:rollback
// knex migrate:latest
