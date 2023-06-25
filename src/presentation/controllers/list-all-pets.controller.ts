import { ListAllPetsInterface } from "../../domain/use-cases/list-all-pets";
import {
  HttpControllerInterface,
  HttpResponse,
  HttpStatusCodes,
} from "../contracts/http-controller";

export class ListAllPetsController implements HttpControllerInterface {
  constructor(private readonly service: ListAllPetsInterface) {}

  async handle(): Promise<HttpResponse> {
    const data = await this.service.execute();

    return {
      statusCode: HttpStatusCodes.OK,
      data,
    };
  }
}
