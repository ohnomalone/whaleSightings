exports.up = function(knex) {
    return Promise.all([
      knex.schema.createTable('beaches', function(table) {
        table.increments('inc_id').primary();
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
      knex.schema.createTable('whalesightings', function(table) {
        table.increments('inc_id').primary();
        table.string('species');
        table.string('quantity');
        table.string('sighted_at');
        table.string('orca_type');
        table.string('beachName');
        table.integer('beachId').unsigned()
        table.foreign('beachId')
         .references('beaches.ID');
        table.timestamps(true, true);
      })
    ])
  };
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable('beaches'),
      knex.schema.dropTable('whaleSightings')
    ]);
  };