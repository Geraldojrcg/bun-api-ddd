import { PetRepositoryInterface } from "../../data/contracts/pet.repository";
import { Pet } from "../../domain/entites/pet";
import Database from "../database/connection";

export class PetRepository implements PetRepositoryInterface {
  private readonly table = "pets";

  constructor(private readonly database: Database) {}

  create(pet: Pet): Promise<void> {
    return this.database.add(this.table, pet);
  }

  findAll(): Promise<Pet[]> {
    return this.database.get(this.table);
  }
}
