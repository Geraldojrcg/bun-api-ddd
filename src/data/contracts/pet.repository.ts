import { Pet } from "../../domain/entites/pet";

export interface PetRepositoryInterface {
  create(pet: Pet): Promise<void>;
  findAll(): Promise<Pet[]>;
}
