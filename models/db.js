   // db.js
   const knex = require('knex');
   const config = require('../knexfile'); // Adjust the path as necessary

   const db = knex(config.development); // Use the appropriate environment
   module.exports = db;