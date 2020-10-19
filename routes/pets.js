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

//need to update paths for request handlers

router.get("/", async function (req, res, next) {
  const pet = await getPets();
  console.log("hello")
  res.json({ success: true, payload: pet });
});

/* Task 4.2 - Write the request handler to get a SoC pet by ID from your SOCPetsTable, and send them back as a JSON object. */

router.get("/pets/:id", function (req, res) {
  const id = req.params.id;
  const pet = getPetById(id);
  res.json({ success: true, payload: pet });
});

/* Task 4.3 - Write the request handler to post a new pet to your SOCPetsTable, and send back a message which assures
you that your new pet has been created.*/

router.post("/", async function (req, res) {
  const pet = req.body;
  console.log(pet);
  const result  = await createPet(pet);
  res.json({ success: true, message: `new entry with row id of ${result}` });
});

/* Task 4.4 - Write the request handler to patch a pet that already exists in your SOCPetsTable, and send back a message which assures
you that your new pet has been updated. */

router.patch("/", async function (req, res) {
  const pet = req.body;
  console.log(pet);
  const result  = await updatePetById(pet);
  res.json({ success: true, message: `new entry with row id of ${result}` });
});

/* Task 4.5 - Write the request handler to delete a pet by ID from your SOCPetsTable, and send back a message that confirms you deleted it. */


router.delete("/", async function (req, res) {
  const pet = req.body;
  console.log(pet);
  const result  = await deletePetById(pet);
  res.json({ success: true, message: `new entry with row id of ${result}` });
});
module.exports = router;
