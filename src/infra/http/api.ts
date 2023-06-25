import Elysia from "elysia";
import { petRoutes } from "./routes/pet.routes";

const app = new Elysia();

app.use(petRoutes);
app.get("/", () => "Welcome to pets api");

const PORT = 8080;

app.listen(PORT, () => console.log(`App is runing on http://localhost:${PORT}`));
