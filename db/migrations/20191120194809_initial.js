exports.up = function(knex) { //  creating table structure that will be used to seed the data
    return Promise.all([ // return promise of all the tables that are being created
      knex.schema.createTable('beaches', function(table) { // create a table called beaches with all information that is going to be passed through 
        table.increments('inc_id').primary(); // create a unique id automatically
        table.integer('ID');
        table.unique('ID');
        table.string('COUNTY');
        table.string('NameMobileWeb');
        table.string('LocationMobileWeb');
        table.string('DescriptionMobileWeb');
        table.string('PHONE_NMBR');
        table.string('FEE');
        table.string('PARKING');
        table.string('DSABLDACSS');
        table.string('RESTROOMS');
        table.string('VISTOR_CTR');
        table.string('DOG_FRIENDLY');
        table.string('EZ4STROLLERS');
        table.string('PCNC_AREA');
        table.string('CAMPGROUND');
        table.string('STRS_BEACH');
        table.string('PTH_BEACH');
        table.string('VOLLEYBALL');
        table.string('FISHING');
        table.string('BOATING');
        table.string('GEOGR_AREA');
        table.string('Photo_1');
        table.string('Photo_2');
        table.string('Photo_3');
        table.string('Photo_4');
        table.string('BIKE_PATH');
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