import { Pet } from "../entites/pet";

export interface ListAllPetsInterface {
  execute(): Promise<Pet[]>;
}
