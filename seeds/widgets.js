exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('widgets').del()
    .then(function () {
      // Inserts seed entries
      return knex('widgets').insert([
        {id: 1, name: 'Red widget', price: 23.45, mfg: 'Acme Inc.', inStock: 4, rating: '5'},
        {id: 2, name: 'Blue widget', price: 423.47, mfg: 'Acme Inc.', inStock: 8, rating: '7'},
        {id: 3, name: 'Yellow widget', price: 123.40, mfg: 'Acme Inc.', inStock: 3, rating: '10'}
      ])
    })
}
