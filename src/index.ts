import express, { Application, Request, Response } from "express";
import Mongoose from "mongoose";
import { runDBConnect } from "../dbconfig";
import characterRoute from "./routes/character";
import cors from "cors";

const app: Application = express();
const port = 5500;

Mongoose.set("useFindAndModify", false);
runDBConnect().catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/characters", characterRoute);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(
      `Server connected successfully on port ${port} at http://localhost:${port}`
    );
  });
} catch (error) {
  console.error(`Server error occured: ${error.message}`);
}
