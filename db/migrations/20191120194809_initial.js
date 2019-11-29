exports.up = function(knex) { //  creating table structure that will be used to seed the data
    return Promise.all([ // return promise of all the tables that are being created
      knex.schema.createTable('beaches', function(table) { // create a table called beaches with all information that is going to be passed through 
        table.increments('inc_id').primary(); // create a unique id automatically
        table.integer('ID'); // create a column for a number
        table.unique('ID'); // the establised column in the beaches table from the line above with be the unique id that is given by the database 
        table.string('COUNTY'); // create a column in the beaches table for COUNTY that will be a string
        table.string('NameMobileWeb'); // create a column in the beaches table for NameMobileWeb that will be a string
        table.string('LocationMobileWeb'); // create a column in the beaches table for LocationMobileWeb that will be a string
        table.string('DescriptionMobileWeb'); // create a column in the beaches table for DescriptionMobileWeb that will be a string
        table.string('PHONE_NMBR'); // create a column in the beaches table for PHONE_NMBR that will be a string
        table.string('FEE'); // create a column in the beaches table for FEE that will be a string
        table.string('PARKING'); // create a column in the beaches table for PARKING that will be a string
        table.string('DSABLDACSS'); // create a column in the beaches table for DSABLDACSS that will be a string
        table.string('RESTROOMS'); // create a column in the beaches table for RESTROOMS that will be a string
        table.string('VISTOR_CTR'); // create a column in the beaches table for VISTOR_CTR that will be a string
        table.string('DOG_FRIENDLY'); // create a column in the beaches table for DOG_FRIENDLY that will be a string
        table.string('EZ4STROLLERS'); // create a column in the beaches table for EZ4STROLLERS that will be a string
        table.string('PCNC_AREA'); // create a column in the beaches table for PCNC_AREA that will be a string
        table.string('CAMPGROUND'); // create a column in the beaches table for CAMPGROUND that will be a string
        table.string('STRS_BEACH'); // create a column in the beaches table for STRS_BEACH that will be a string
        table.string('PTH_BEACH'); // create a column in the beaches table for PTH_BEACH that will be a string
        table.string('VOLLEYBALL'); // create a column in the beaches table for VOLLEYBALL that will be a string
        table.string('FISHING'); // create a column in the beaches table for FISHING that will be a string
        table.string('BOATING'); // create a column in the beaches table for BOATING that will be a string
        table.string('GEOGR_AREA'); // create a column in the beaches table for GEOGR_AREA that will be a string
        table.string('Photo_1'); // create a column in the beaches table for Photo_1 that will be a string
        table.string('Photo_2'); // create a column in the beaches table for Photo_2 that will be a string
        table.string('Photo_3'); // create a column in the beaches table for Photo_3 that will be a string
        table.string('Photo_4'); // create a column in the beaches table for Photo_4 that will be a string
        table.string('BIKE_PATH'); // create a column in the beaches table for BIKE_PATH that will be a string
        table.timestamps(true, true);
      }),
      knex.schema.createTable('whalesightings', function(table) { // create a table called beaches with all information that is going to be passed through 
        table.increments('inc_id').primary();  // create a unique id automatically
        table.string('species');
        table.string('quantity');
        table.string('sighted_at');
        table.string('orca_type');
        table.string('beachName');
        table.integer('beachId').unsigned() // create a column that has the associated id from the corrilating beach that is unassigned
        table.foreign('beachId') // assin that corrilating beach id to the forgien column
         .references('beaches.ID');
        table.timestamps(true, true);
      })
    ])
  };
  exports.down = function(knex) { // when having to go back create what the tables are called
    return Promise.all([
      knex.schema.dropTable('beaches'),
      knex.schema.dropTable('whaleSightings')
    ]);
  };