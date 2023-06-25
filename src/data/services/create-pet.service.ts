import { Pet } from "../../domain/entites/pet";
import { CreatePetInterface } from "../../domain/use-cases/create-pet";
import { PetRepositoryInterface } from "../contracts/pet.repository";

export class CreatePetService implements CreatePetInterface {
  constructor(private readonly repository: PetRepositoryInterface) {}

  async execute(pet: Pet): Promise<void> {
    await this.repository.create(pet);
  }
}
