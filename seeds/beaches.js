const beachData = require('../data/sampleBeachData.js');

const createBeach = (knex, beach) => {
  return knex('beaches').insert({
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

exports.seed = (knex) => {
  return knex('beaches').del() // delete beaches first
    .then(() => {
      let beachesPromises = []; 

      beachData.forEach(beach => {
        beachesPromises.push(createBeach(knex, beach));
      });

      return Promise.all(beachesPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};


