import { CreatePetService } from "../../data/services/create-pet.service";
import { CreatePetController } from "../../presentation/controllers/create-pet.controller";
import { CreatePetValidator } from "../../presentation/validators/create-pet.validator";
import Database from "../database/connection";
import { PetRepository } from "../repositories/pet.repository";

export function createPetControllerFactory() {
  const database = Database.instance;
  const repository = new PetRepository(database);
  const service = new CreatePetService(repository);
  const validator = new CreatePetValidator();
  return new CreatePetController(service, validator);
}
