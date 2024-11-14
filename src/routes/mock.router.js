import { Router } from "express";
import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";
import { generatePetsMock } from "../mocks/pets.mock.js";
import { PetServices } from "../services/pet.services.js";

const userServices = new UserServices();
const petsServices = new PetServices();
const router = Router();

router.get("/mockingpets", async (req, res, next) => {
  try {
    const pets = generatePetsMock(5);
    const response = await petsServices.createMany(pets);
    res.status(200).json({ status: "ok", payload: response });
  } catch (error) {
    error.path = "[GET] api/mocks/mockingpets";
    next(error);
  }
});

router.get("/mockingusers", async (req, res, next) => {
  try {
    const users = await generateUsersMock(5);
    const response = await userServices.createMany(users);
    res.status(200).json({ status: "ok", payload: response });
  } catch (error) {
    error.path = "[GET] api/mocks/mockingusers";
    next(error);
  }
});

router.get("/generateData/:cu/:cp", async (req, res, next) => {
  try {
    const { cu, cp } = req.params;

    // Validate cu and cp
    const userCount = Number(cu);
    const petCount = Number(cp);
    if (isNaN(userCount) || userCount <= 0 || isNaN(petCount) || petCount <= 0) {
      return res.status(400).json({ status: "error", message: "Invalid parameters" });
    }

    const users = await generateUsersMock(userCount);
    const pets = generatePetsMock(petCount);
    const usersResponse = await userServices.createMany(users);
    const petsResponse = await petsServices.createMany(pets);

    res.status(200).json({ status: "ok", payload: { usersResponse, petsResponse } });
  } catch (error) {
    error.path = "[GET] api/mocks/generateData";
    next(error);
  }
});

export default router;
