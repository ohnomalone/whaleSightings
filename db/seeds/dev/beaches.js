const beachData = require('../../../data/sampleBeachData.js'); //import beachData

const createBeach = (knex, beach) => { // function to createBeach and insert the data being passed through
  return knex('beaches').insert({ // insert this newley created object into the beaches database
    ID: beach.ID, // takes the property from the beach object that was passed through and assigns it to ID  
    COUNTY: beach.COUNTY, // takes the property from the beach object that was passed through and assigns it to COUNTY  
    NameMobileWeb: beach.NameMobileWeb, // takes the property from the beach object that was passed through and assigns it to NameMobileWeb  
    LocationMobileWeb: beach.LocationMobileWeb, // takes the property from the beach object that was passed through and assigns it to LocationMobileWeb  
    DescriptionMobileWeb: beach.DescriptionMobileWeb, // takes the property from the beach object that was passed through and assigns it to DescriptionMobileWeb  
    PHONE_NMBR: beach.PHONE_NMBR, // takes the property from the beach object that was passed through and assigns it to PHONE_NMBR  
    FEE: beach.FEE, // takes the property from the beach object that was passed through and assigns it to FEE  
    PARKING: beach.PARKING, // takes the property from the beach object that was passed through and assigns it to PARKING  
    DSABLDACSS: beach.DSABLDACSS, // takes the property from the beach object that was passed through and assigns it to DSABLDACSS  
    RESTROOMS: beach.RESTROOMS, // takes the property from the beach object that was passed through and assigns it to RESTROOMS  
    VISTOR_CTR: beach.VISTOR_CTR, // takes the property from the beach object that was passed through and assigns it to VISTOR_CTR  
    DOG_FRIENDLY: beach.DOG_FRIENDLY, // takes the property from the beach object that was passed through and assigns it to DOG_FRIENDLY  
    EZ4STROLLERS: beach.EZ4STROLLERS, // takes the property from the beach object that was passed through and assigns it to EZ4STROLLERS  
    PCNC_AREA: beach.PCNC_AREA, // takes the property from the beach object that was passed through and assigns it to PCNC_AREA  
    CAMPGROUND: beach.CAMPGROUND, // takes the property from the beach object that was passed through and assigns it to CAMPGROUND  
    STRS_BEACH: beach.STRS_BEACH, // takes the property from the beach object that was passed through and assigns it to STRS_BEACH  
    PTH_BEACH: beach.PTH_BEACH, // takes the property from the beach object that was passed through and assigns it to PTH_BEACH  
    VOLLEYBALL: beach.VOLLEYBALL, // takes the property from the beach object that was passed through and assigns it to VOLLEYBALL  
    FISHING: beach.FISHING, // takes the property from the beach object that was passed through and assigns it to FISHING  
    BOATING: beach.BOATING, // takes the property from the beach object that was passed through and assigns it to BOATING  
    GEOGR_AREA: beach.GEOGR_AREA, // takes the property from the beach object that was passed through and assigns it to GEOGR_AREA  
    Photo_1: beach.Photo_1, // takes the property from the beach object that was passed through and assigns it to Photo_1  
    Photo_2: beach.Photo_2, // takes the property from the beach object that was passed through and assigns it to Photo_2  
    Photo_3: beach.Photo_3, // takes the property from the beach object that was passed through and assigns it to Photo_3  
    Photo_4: beach.Photo_4, // takes the property from the beach object that was passed through and assigns it to Photo_4  
    BIKE_PATH: beach.BIKE_PATH // takes the property from the beach object that was passed through and assigns it to BIKE_PATH  
  }, 'ID') // 
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


