const whaleSightingsData = require('../../../data/sampleWhaleSightingsData');

const createWhaleSighting = (knex, whalesighting) => {
  return knex('whalesightings').insert({
    species: whalesighting.species,
    quantity: whalesighting.quantity,
    sighted_at: whalesighting.sighted_at,
    orca_type: whalesighting.orca_type,
    beachId: whalesighting.beachId,
    beachName: whalesighting.beachName
  }, 'inc_id')
};

exports.seed = (knex) => {
  return knex('whalesightings').del() // delete whalesightings first
    .then(() => {
      let whalesightingsPromises = [];

      whaleSightingsData.forEach(whalesightings => {
        whalesightings.forEach( whalesighting => {
          whalesightingsPromises.push(createWhaleSighting(knex, whalesighting));
        })
      });

      return Promise.all(whalesightingsPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
