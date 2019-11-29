const whaleSightingsData = require('../../../data/sampleWhaleSightingsData'); //import whalesightings data

const createWhaleSighting = (knex, whalesighting) => { // function to createWhaleSighting and insert the data being passed through
  return knex('whalesightings').insert({ // insert this newlwey created object into the beaches database
    species: whalesighting.species, // takes the property from the beach object that was passed through and assigns it to species
    quantity: whalesighting.quantity, // takes the property from the beach object that was passed through and assigns it to quantity
    sighted_at: whalesighting.sighted_at, // takes the property from the beach object that was passed through and assigns it to sighted_at
    orca_type: whalesighting.orca_type, // takes the property from the beach object that was passed through and assigns it to orca_type
    beachId: whalesighting.beachId, // takes the property from the beach object that was passed through and assigns it to beachId
    beachName: whalesighting.beachName // takes the property from the beach object that was passed through and assigns it to beachName
  }, 'inc_id') // 
};

exports.seed = (knex) => {
  return knex('whalesightings').del() // delete whalesightings first
    .then(() => { // then do the following
      let whalesightingsPromises = []; // create an arrary called whalesightingsPromises

      whaleSightingsData.forEach(whalesightings => { // go through all the array of whalesightings and with each array
        whalesightings.forEach( whalesighting => { // go through that array of whale sightings and with that whale sighting
          whalesightingsPromises.push(createWhaleSighting(knex, whalesighting)); // push in each newly created whale sighting that was run was called through createWhaleSighting into the whalesightingsPromises array 
        })
      });

      return Promise.all(whalesightingsPromises); // return all the newley created beaches in the promise all so they call resolve
    })
    .catch(error => console.log(`Error seeding data: ${error}`)); // if this doesn't work send and error
};
