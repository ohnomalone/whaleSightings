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

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`)
})

app.get('/api/v1/whale_sightings', (request, response) => {
  database('whalesightings').select()
   .then((whalesightings) => {
     response.status(200).json(whalesightings)
   })
   .catch((error) => {
    response.status(500).json({ error: "Cannot retreive Whale Sightings Data (this blows)" });
  });
});

app.get('/api/v1/beaches', (request, response) => {
  database('beaches').select()
   .then((beaches) => {
     response.status(200).json(beaches)
   })
   .catch((error) => {
    response.status(500).json({ error: "Cannot retreive Beach Data (try again just for the halibut)" });
  });
});

app.get('/api/v1/beaches/:id', (request, response) => {
  database('beaches').where('ID', request.params.id).select()
   .then((beaches) => {
     if (beaches.length) {
       response.status(200).json(beaches)
     } else {
      response.status(404).json({ 
        error: `Could not get beach with id ${request.params.id}, Can you please be more Pacific?`
      })
    }
  })
   .catch((error) => {
    response.status(500).json({ error: "Cannot retreive Beach Data (try again just for the halibut)" });
  });
});

app.get('/api/v1/beaches/:id/whale_sightings', (request, response) => {
  database('whalesightings').where('beachId', request.params.id).select()
  .then((whalesightings) => {
    console.log('whalesightings', whalesightings)
     if (whalesightings.length) {
       response.status(200).json(whalesightings)
     } else {
      response.status(404).json({ 
        error: `Could not get whale sightings with beach id ${request.params.id}, it might be because the sea weed.`
      })
    }
  })
   .catch((error) => {
    response.status(500).json({ error: "Cannot retreive Whale Wightings Data (I think you’ve confused me with someone who builds a dam)" });
  });
});

app.get('/api/v1/beaches/sighting_type/:id', (request, response) => {
  database('beaches')
    .innerJoin('whalesightings', 'beaches.ID', 'whalesightings.beachId')
    .where('whalesightings.species', request.params.id)
    .then( (beachesWithSightings) => {
      const cleanBeachesWithSightings = beachesWithSightings.reduce( (acc, beach) => {
        if ( !acc.find( accBeach => beach.ID === accBeach.ID)) {
          acc.push(beach)
        }
        return acc
      }, [])
      response.send(cleanBeachesWithSightings)
    })
    .catch((error) => {
      response.status(500).json({ error: `No ${request.params.id} beach sightings data (try again just for the halibut)` });
    });
})

app.post('/api/v1/whale_sightings', (request, response) => {
  const sighting = request.body
  console.log(sighting)
  for (let requiredParameter of ['species', 'sighted_at', 'beachId', 'beachName']) {
    if (!sighting[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {
          species: <String>,
          quantity: <Number>(optional),
          sighted_at: <String>,
          orca_type: <String>(optional),
          beachId: 1,
          beachName: <String>
        }. You're missing a "${requiredParameter}" property.` });
    }
  }
 
  database('whalesightings').insert(sighting, 'inc_id')
    .then(sighting => {
      response.status(201).json({ id: sighting[0]})
    })
    .catch(error => {
      response.status(500).json({ error });
    });
})