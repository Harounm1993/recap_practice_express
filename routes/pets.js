const express = require("express");
const router = express.Router();

const {
  getPets,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require("../models/pets");

/* Task 4.1 - Write the request handler to get all SoC pets from your SOCPetsTable, and send them back as a JSON object. */

router.get("/", async (req, res) => {
  const pets = await getPets();
  console.log(`GET: all pets`);
  res.json({ payload: pets });
});

/* Task 4.2 - Write the request handler to get a SoC pet by ID from your SOCPetsTable, and send them back as a JSON object. */

router.get("/:petId", async (req, res) => {
  const { petId } = req.params;
  const pet = await getPetById(petId);
  res.json({ payload: pet });
});

/* Task 4.3 - Write the request handler to post a new pet to your SOCPetsTable, and send back a message which assures
you that your new pet has been created.*/

router.post("/", async (req, res) => {
  const { body } = req;
  await createPet(body);
  res
    .status(201)
    .json({ message: `You have added ${body.pet_name} as an SoC Pet.` });
});

/* Task 4.4 - Write the request handler to patch a pet that already exists in your SOCPetsTable, and send back a message which assures
you that your new pet has been updated. */

router.patch("/:petId", async (req, res) => {
  const { body } = req;
  const { petId } = req.params;
  const updatedPet = await updatePetById(petId, body);
  if (updatedPet) {
    res.status(200).json({ message: `You've updated ${updatedPet.pet_name}.` });
    return;
  }
  res.status(400).json({ message: `No pet by that ID found.` });
});

/* Task 4.5 - Write the request handler to delete a pet by ID from your SOCPetsTable, and send back a message that confirms you deleted it. */

router.delete("/:petId", async (req, res) => {
  const { petId } = req.params;
  const deletedPet = await deletePetById(petId);
  if (deletedPet) {
    res.status(200).send({
      message: `The pet with the ID of ${deletedPet.pet_id} has been deleted from the SOCPets table`,
    });
    return;
  }
  res.status(406).json({ message: `No SoC pet by that ID found.` });
});

module.exports = router;
