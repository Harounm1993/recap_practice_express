const { query } = require("../db/index");

async function getPets() {
  const pets = await query(`SELECT * FROM school_of_code_pets`);
  return pets.rows;
}

async function getPetById(id) {
  const pets = await query(
    `SELECT * FROM school_of_code_pets WHERE pet_id = $1`,
    [id]
  );
  return pets.rows[0];
}

async function createPet(info) {
  const { human, pet, pet_name, pet_age, friendly } = info;
  const res = await query(
    `INSERT INTO school_of_code_pets (human,
      pet,
      pet_name,
      pet_age,
      friendly) values ($1,$2,$3,$4, $5) RETURNING pet_name`,
    [human, pet, pet_name, pet_age, friendly]
  );
  return res.rows[0];
}

async function updatePetById(petId, info) {
  const { human, pet, pet_name, pet_age, friendly } = info;
  const res = await query(
    `UPDATE school_of_code_pets 
      SET 
      human = COALESCE($2, human),
      pet = COALESCE($3, pet),
      pet_name = COALESCE($4, pet_name),
      pet_age = COALESCE($5, pet_age),
      friendly = COALESCE($6, friendly)
      WHERE pet_id = $1 RETURNING pet_name`,
    [petId, human, pet, pet_name, pet_age, friendly]
  );
  return res.rows[0];
}

async function deletePetById(petId) {
  const res = await query(
    `DELETE FROM school_of_code_pets WHERE pet_id = $1 RETURNING pet_id`,
    [petId]
  );
  return res.rows[0];
}

module.exports = {
  getPets,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
};
