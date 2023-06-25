import { Elysia } from "elysia";
import { listAllPetsControllerFactory } from "../../factories/list-all-pets-controller.factory";
import { createPetControllerFactory } from "../../factories/create-pet-controller.factory";
import { CreatePetSchema } from "../../../presentation/validators/create-pet.validator";

export const petRoutes = (app: Elysia) => {
  const PREFIX = "/pets";

  app.get(PREFIX, async () => {
    const controller = listAllPetsControllerFactory();
    return controller.handle();
  });

  app.post(PREFIX, async ({ body }) => {
    const controller = createPetControllerFactory();
    return controller.handle({
      body: body as unknown as CreatePetSchema,
    });
  });

  return app;
};
