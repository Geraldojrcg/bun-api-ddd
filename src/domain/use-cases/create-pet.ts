import { Pet } from "../entites/pet";

export interface CreatePetInterface {
  execute(pet: Pet): Promise<void>;
}
