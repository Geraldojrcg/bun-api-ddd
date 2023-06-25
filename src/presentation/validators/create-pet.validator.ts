import { PetGender } from "../../domain/enuns/pet-gender.enum";
import { ValidatorInterface, ValidatorResponse } from "../contracts/validator";
import z from "zod";

const schema = z.object({
  name: z.string(),
  gender: z.nativeEnum(PetGender),
  birthdate: z.string().pipe(z.coerce.date()),
});

export type CreatePetSchema = z.infer<typeof schema>;

export class CreatePetValidator implements ValidatorInterface {
  validate(data: any): ValidatorResponse {
    const result = schema.safeParse(data);
    return {
      isValid: result.success,
      error: !result.success ? result.error : undefined,
    };
  }
}
