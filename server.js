const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const sampleWhaleSightingsData = require('./data/sampleWhaleSightingsData.js');
const sampleBeachData = require('./data/sampleBeachData.js');

console.log('env', environment)
console.log('config', configuration)

app.set('port', process.env.PORT || 3000);
app.use(express.json())

app.listen(app.get('port'), () => { // get listenr function for when the esrver is running
  console.log(`App is running on ${app.get('port')}`) // log that the app is running on whcih port
})


app.get('/', (request, response) => { //get request for home page
  response.send('BOYB WHALE WATCHERS') // responds to print this to the page
})

app.get('/api/v1/whale_sightings', (request, response) => { //get request for all whale sightings
  database('whalesightings').select() // select the whalesightings database
   .then((whalesightings) => { // then with the whale sightings database
     response.status(200).json(whalesightings) // return the whale sightings database
   })
   .catch((error) => { // catch this if this doesnt work
    response.status(404).json({ error: "Cannot retreive Whale Sightings Data (this blows)" }); // return with this status code and error essage
  });
});

app.get('/api/v1/beaches', (request, response) => { //get request for all beaches
  database('beaches').select() // select the beaches database
   .then((beaches) => { // then with the beaches database
     response.status(200).json(beaches) // return the beaches database
   })
   .catch((error) => { // catch this if this doesnt work
    response.status(404).json({ error: "Cannot retreive Beach Data (try again just for the halibut)" }); // return with this status code and error essage
  });
});

app.get('/api/v1/beaches/:id', (request, response) => { //get request for a specific beach
  database('beaches').where('ID', request.params.id).select() // select the beaches database and with the parameters of the id that was given in the request
   .then((beaches) => {
     if (beaches.length) { // conditional to see of that beacn exists and if it does
       response.status(200).json(beaches) // return that beach with status code
     } else { // if it doesnt exist 
      response.status(404).json({  // return status code 
        error: `Could not get beach with id ${request.params.id}, Can you please be more Pacific?` // return specific error message
      })
    }
  })
   .catch((error) => { // catch and respond with error message
    response.status(404).json({ error: "Cannot retreive Beach Data (try again just for the halibut)" }); // return with this status code and error essage
  });
});

app.get('/api/v1/beaches/:id/whale_sightings', (request, response) => { //get request for a all whale sightings from a specific beach
  database('whalesightings').where('beachId', request.params.id).select() // select the whalesightings database and with the parameters of the id that was given in the request
  .then((whalesightings) => { // then with the whale sightings data
     if (whalesightings.length) { // if there was data that was returned
       response.status(200).json(whalesightings) // return the whale sightings with the data
     } else { // if no whale sightings were returned
      response.status(404).json({  // return error code
        error: `Could not get whale sightings with beach id ${request.params.id}, it might be because sea weed.` // return error specific error message
      })
    }
  })
   .catch((error) => { // catch and respond with error message
    response.status(404).json({ error: "Cannot retreive Whale Wightings Data (I think you’ve confused me with someone who builds a dam)" }); // return with this status code and error essage
  });
});

app.get('/api/v1/beaches/sighting_type/:id', (request, response) => { // get request for all beaches with a specific whale/marine animal
  database('beaches') // start with the database beaches since beaches is what we want to return
    .innerJoin('whalesightings', 'beaches.ID', 'whalesightings.beachId') // joing beaches table with whalesightings table where the beaches.ID and whalesightings.beachId match
    .where('whalesightings.species', request.params.id) // with the id that was passed through and in this case it is the type of whale/ marine animal get all the beaches that line up with the previous line
    .then( (beachesWithSightings) => { // then with the data 
      const cleanBeachesWithSightings = beachesWithSightings.reduce( (acc, beach) => { // go through the data and remove all duplicated of the beaches that were returned
        if ( !acc.find( accBeach => beach.ID === accBeach.ID)) { // Logic to check if current beach is in the acc array
          acc.push(beach) // if the beach is not in the acc array, push it in
        }
        return acc // retrun the acc as part of the reduce method
      }, []) // end of reduce method and sets the initial acc to an empty array
      response.send(cleanBeachesWithSightings) // respond with the beaches where the sightings of that specific whale/ marine animal were spotted
    })
    .catch((error) => { // catch and respond with error message
      response.status(404).json({ error: `No ${request.params.id} beach sightings data (try again just for the halibut)` }); // return with this status code and error essage
    });
})

app.post('/api/v1/whale_sightings', (request, response) => { // post/add to whale sightings
  const sighting = request.body // reassigning the request body to sighting
  for (let requiredParameter of ['species', 'sighted_at', 'beachId', 'beachName']) { // set required paramters for what needs to be in the request body
    if (!sighting[requiredParameter]) { // check to see if the request body has the required parameters and it it doesn't respond with the following status code and error response
      return response // if there was a missing parapmater return this response
        .status(422) // return status code 422
        .send({ error: `Expected format: { // return the error in the expected format
          species: <String>, // species is required in a string format
          quantity: <Number>(optional), // quantity is optional, input needs to be in a number format
          sighted_at: <String>, / species is required in a string format
          orca_type: <String>(optional), // orca_type is optional, input needs to be in a string format
          beachId: 1, // beachId is required in a number format
          beachName: <String> // beachName is required in a string format
        }. You're missing a "${requiredParameter}" property.` }); // will print out which paramater is missing/incorrect
    }
  }
 
  database('whalesightings').insert(sighting, 'inc_id') // with the whalesightings database inster the sighting that was passed through, if it made it down this far the reqeust has all ncessary information
    .then(sighting => { // then with the request body that was sent
      response.status(201).json({ id: sighting[0]}) // return that request body with the status code that it was added
    })
    .catch(error => { // catch and respond with error message
      response.status(404).json({ error: "Cannot add whale/marine animal sighting to database, are you sure we have a planktonic relationship?" }); // return with this status code and error essage
    });
})

app.delete('/api/v1/whale_sightings/:id', (request, response) => { // Delete whale sighting from whalesightings
    const { id } = request.params; // destructuring the id from the request parameters
    database('whalesightings') // with the whalesightings database
      .where({ inc_id: id }) // where the id mathes
      .del() // delete that object
      .then(set => { // then once that successfully happens
        response.status(201).json({ inc_id: id }) // respind with the id of the object that was just deleted
      })
      .catch(error => { // catch and respond with error message
        response.status(422).json({ error: "Cannot delete whale/marine animal sighting from database, I'd call the Codfather" }) // return with this status code and error essage
      })
})

app.post('/api/v1/beaches', (request, response) => { // post/add to beaches
  const beach = request.body // reassigning the request body to beach
  for (let requiredParameter of ['NameMobileWeb', 'LocationMobileWeb', 'DescriptionMobileWeb', 'PARKING']) { // set required paramters for what needs to be in the request body
    if (!beach[requiredParameter]) { // check to see if the request body has the required parameters and it it doesn't respond with the following status code and error response
      return response
        .status(422)
        .send({ error: `Expected format: {
          "COUNTY": <String>,
          "NameMobileWeb": <String>,
          "LocationMobileWeb": <String>,
          "DescriptionMobileWeb": <String>,
          "PHONE_NMBR": <String>,
          "FEE": <String>,
          "PARKING": <String>,
        }. You're missing a "${requiredParameter}" property.` });
    }
  }
 
  database('beaches').insert(beach, 'inc_id') // with the whalesightings database inster the sighting that was passed through, if it made it down this far the reqeust has all ncessary information
    .then(beach => { // then with the request body that was sent
      response.status(201).json({ id: beach[0]}) // return that request body with the status code that it was added
    })
    .catch(error => { // catch and respond with error message
      response.status(404).json({ error: "Cannot add beach to the database, looks like it's time to Netflix and krill." }); // return with this status code and error essage
    });
})