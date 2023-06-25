import { Pet } from "../../domain/entites/pet";
import { CreatePetInterface } from "../../domain/use-cases/create-pet";
import {
  HttpControllerInterface,
  HttpRequest,
  HttpResponse,
  HttpStatusCodes,
} from "../contracts/http-controller";
import { ValidatorInterface } from "../contracts/validator";
import { CreatePetSchema } from "../validators/create-pet.validator";

export class CreatePetController implements HttpControllerInterface {
  constructor(
    private readonly service: CreatePetInterface,
    private readonly validator: ValidatorInterface,
  ) {}

  async handle({ body }: HttpRequest<CreatePetSchema>): Promise<HttpResponse> {
    const { isValid, error } = this.validator.validate(body);
    if (!isValid) {
      return {
        statusCode: HttpStatusCodes.BAD_REQUEST,
        data: error,
      };
    }

    const newPet = new Pet({
      name: body!.name,
      birthdate: body!.birthdate,
      gender: body!.gender,
    });

    await this.service.execute(newPet);

    return {
      statusCode: HttpStatusCodes.CREATED,
    };
  }
}
