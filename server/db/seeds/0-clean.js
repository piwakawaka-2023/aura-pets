exports.seed = (knex) => {
  const empty = (table) => knex(table).delete()
  return empty('answers')
  .then(() => empty('users'))
  .then(() => empty('pets'))
  .then(() => empty('questions'))
}