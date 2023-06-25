import { ListAllPetsService } from "../../data/services/list-all-pets.service";
import { ListAllPetsController } from "../../presentation/controllers/list-all-pets.controller";
import Database from "../database/connection";
import { PetRepository } from "../repositories/pet.repository";

export function listAllPetsControllerFactory() {
  const database = Database.instance;
  const repository = new PetRepository(database);
  const service = new ListAllPetsService(repository);
  return new ListAllPetsController(service);
}
