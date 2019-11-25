const beachData = require('../../../data/sampleBeachData.js'); //import beachData

const createBeach = (knex, beach) => { // function to createBeach and insert the data being passed through
  return knex('beaches').insert({ // insert this newlwey created object into the beaches database
    ID: beach.ID,
    COUNTY: beach.COUNTY,
    NameMobileWeb: beach.NameMobileWeb,
    LocationMobileWeb: beach.LocationMobileWeb,
    DescriptionMobileWeb: beach.DescriptionMobileWeb,
    PHONE_NMBR: beach.PHONE_NMBR,
    FEE: beach.FEE,
    PARKING: beach.PARKING,
    DSABLDACSS: beach.DSABLDACSS,
    RESTROOMS: beach.RESTROOMS,
    VISTOR_CTR: beach.VISTOR_CTR,
    DOG_FRIENDLY: beach.DOG_FRIENDLY,
    EZ4STROLLERS: beach.EZ4STROLLERS,
    PCNC_AREA: beach.PCNC_AREA,
    CAMPGROUND: beach.CAMPGROUND,
    STRS_BEACH: beach.STRS_BEACH,
    PTH_BEACH: beach.PTH_BEACH,
    VOLLEYBALL: beach.VOLLEYBALL,
    FISHING: beach.FISHING,
    BOATING: beach.BOATING,
    GEOGR_AREA: beach.GEOGR_AREA,
    Photo_1: beach.Photo_1,
    Photo_2: beach.Photo_2,
    Photo_3: beach.Photo_3,
    Photo_4: beach.Photo_4,
    BIKE_PATH: beach.BIKE_PATH
  }, 'ID')
};

exports.seed = (knex) => { // 
  return knex('beaches').del() // delete beaches first
    .then(() => { // then do the following
      let beachesPromises = []; // create an arrary called beachesPromises

      beachData.forEach(beach => { // go through all the beachData and with each beach
        beachesPromises.push(createBeach(knex, beach)); // push in each newly created beach that was run was called through createBeach into the beachesPromises array 
      });

      return Promise.all(beachesPromises); // return all the newley created beaches in the promise all so they call resolve
    })
    .catch(error => console.log(`Error seeding data: ${error}`)); // if this doesn't work send and error
};


