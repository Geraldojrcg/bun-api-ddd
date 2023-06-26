import { v4 as uuid } from "uuid";
import { PetGender } from "../enuns/pet-gender.enum";
import { entityToJson } from "entity-to-json";

export type PetProps = {
  id?: string;
  name: string;
  birthdate: Date;
  gender: PetGender;
};

export class Pet {
  private _id?: string;
  private _name: string;
  private _birthdate: Date;
  private _gender: PetGender;

  constructor(props: PetProps) {
    if (!props.id) {
      this._id = uuid();
    }
    this.changeName(props.name);
    this.changeBirthdate(props.birthdate);
    this.changeGender(props.gender);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get birthdate() {
    return this._birthdate;
  }

  get gender() {
    return this._gender;
  }

  get relativeAge() {
    const birthyear = new Date(this._birthdate).getFullYear();
    const currentyear = new Date().getFullYear();
    return (currentyear - birthyear) * 5 || 1;
  }

  changeName(name: string) {
    this._name = name;
  }

  changeBirthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }

  changeGender(gender: PetGender) {
    this._gender = gender;
  }

  public toJSON() {
    return entityToJson(this);
  }
}
