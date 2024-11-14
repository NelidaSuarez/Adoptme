import { fakerES_MX as faker } from "@faker-js/faker";

export const generatePetsMock = (amount) => {
  const pets = [];
  for (let i = 0; i < amount; i++) {
    const pet = {
      name: faker.person.firstName(),
      specie: Math.random() > 0.5 ? "Cat" : "Dog",  // 50% de probabilidad
      birthDate: faker.date.past(),
      adopted: false,
      image: faker.image.avatar(),
    };
    pets.push(pet);
  }

  return pets;
};