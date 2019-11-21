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
