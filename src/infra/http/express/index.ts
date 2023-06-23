import express, { Request, Response } from "express";
import {
  createRouteUseCase,
  deleteRouteUseCase,
  findAllRoutesUseCase,
  findOneRouteUseCase,
  updatePositionRouteUseCase,
  updateTitleRouteUseCase,
} from "../../../shared/container";

export const app = express();

app.use(express.json());

app.get("/route", async (req: Request, res: Response) => {
  const output = await findAllRoutesUseCase.execute();
  res.status(200).json(output);
});

app.get("/route/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const output = await findOneRouteUseCase.execute(id);
  res.status(200).json(output);
});

app.post("/route", async (req: Request, res: Response) => {
  const { title, startPosition, endPosition, points } = req.body;

  const output = await createRouteUseCase.execute({
    title,
    startPosition,
    endPosition,
    points,
  });
  res.status(200).json(output);
});

app.put("/route/:id/title", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  const output = await updateTitleRouteUseCase.execute(id, title);
  res.status(200).json(output);
});

app.put("/route/:id/position", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { startPosition, endPosition } = req.body;
  const output = await updatePositionRouteUseCase.execute(
    id,
    startPosition,
    endPosition
  );
  res.status(200).json(output);
});

app.delete("/route/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteRouteUseCase.execute(id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
