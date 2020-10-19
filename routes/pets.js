const express = require('express');
const router = express.Router();

const {
  getPets,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require('../models/pets');

/* Task 4.1 - Write the request handler to get all SoC pets from your SOCPetsTable, and send them back as a JSON object. */

/* Task 4.2 - Write the request handler to get a SoC pet by ID from your SOCPetsTable, and send them back as a JSON object. */

/* Task 4.3 - Write the request handler to post a new pet to your SOCPetsTable, and send back a message which assures
you that your new pet has been created.*/

/* Task 4.4 - Write the request handler to patch a pet that already exists in your SOCPetsTable, and send back a message which assures
you that your new pet has been updated. */

/* Task 4.5 - Write the request handler to delete a pet by ID from your SOCPetsTable, and send back a message that confirms you deleted it. */

module.exports = router;
