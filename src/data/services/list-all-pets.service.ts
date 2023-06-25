import { Pet } from "../../domain/entites/pet";
import { ListAllPetsInterface } from "../../domain/use-cases/list-all-pets";
import { PetRepositoryInterface } from "../contracts/pet.repository";

export class ListAllPetsService implements ListAllPetsInterface {
  constructor(private readonly repository: PetRepositoryInterface) {}

  execute(): Promise<Pet[]> {
    return this.repository.findAll();
  }
}
