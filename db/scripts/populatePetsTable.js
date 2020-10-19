const { query } = require('../index.js');

const SOCPets = [
  {
    human: 'Mell',
    pet: 'Cat',
    pet_name: 'Narla',
    pet_age: 6,
    friendly: true,
  },
  {
    human: 'Liz.K',
    pet: 'Cat',
    pet_name: 'Tony',
    pet_age: 7,
    friendly: true,
  },
  {
    human: 'Tim',
    pet: 'Cat',
    pet_name: 'Poppy',
    pet_age: 12,
    friendly: true,
  },
  {
    human: 'Bryan',
    pet: 'Goldfish',
    pet_name: 'Salmon',
    pet_age: 1,
    friendly: false,
  },
  {
    human: 'Becky',
    pet: 'Cat',
    pet_name: 'Cotton',
    pet_age: 8,
    friendly: true,
  },
  {
    human: 'Dan.S',
    pet: 'Dog',
    pet_name: 'Napoleon',
    pet_age: 9,
    friendly: true,
  },
  {
    human: 'Anna',
    pet: 'Cat',
    pet_name: 'Tiggy',
    pet_age: 15,
    friendly: true,
  },
  {
    human: 'Jo-Anne',
    pet: 'Cat',
    pet_name: 'Ollie',
    pet_age: 10,
    friendly: true,
  },
  {
    human: 'Daniela',
    pet: 'Cat',
    pet_name: 'Puffy',
    pet_age: 5,
    friendly: true,
  },
  {
    human: 'Ben',
    pet: 'plant',
    pet_name: 'Agatha',
    pet_age: 2,
    friendly: false,
  },
  {
    human: 'Piper',
    pet: 'Rat',
    pet_name: 'Mist',
    pet_age: 1,
    friendly: true,
  },
  {
    human: 'Laura',
    pet: 'Plant',
    pet_name: 'Aethelfled',
    pet_age: 1,
    friendly: true,
  },
  {
    human: 'Hazie',
    pet: 'Dog',
    pet_name: 'Kit',
    pet_age: 1,
    friendly: true,
  },
];

async function populateSOCPetsTable() {
  for (let i = 0; i < SOCPets.length; i++) {
    // Write code below:

    const { human, pet, pet_name, pet_age, friendly } = SOCPets[i];
    await query(
      `INSERT INTO school_of_code_pets (human,
        pet,
        pet_name,
        pet_age,
        friendly) VALUES ($1,$2,$3,$4, $5)`,
      [human, pet, pet_name, pet_age, friendly]
    );

    // Write code above ^^^
    console.log(`Log:Populated table with ${pet_name}`);
  }
}
populateSOCPetsTable();
