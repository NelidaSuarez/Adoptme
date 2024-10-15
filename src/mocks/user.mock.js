import { fakerES_MX as faker } from "@faker-js/faker";

export const generateUsersMock = () => {

    const users = [];

    for(let i = 0; i <= 10; i++){
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: "user",
            pets: [],
          };
          users.push(user);
    }

   
      return users;
};