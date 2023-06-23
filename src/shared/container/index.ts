import { CreateRouteUseCase } from "../../application/route/create-route.use-case";
import { DeleteRouteUseCase } from "../../application/route/delete-route.use-case";
import { FindAllRoutesUseCase } from "../../application/route/find-all-route.use-case";
import { FindOneRouteUseCase } from "../../application/route/find-one-route.use-case";
import { UpdatePositionRouteUseCase } from "../../application/route/update-position-route.use-case";
import { UpdateTitleRouteUseCase } from "../../application/route/update-title-route.use-case";
import { RouteInMemoryRepository } from "../../infra/db/route-in-memory.repository";

const repository = new RouteInMemoryRepository();
const createRouteUseCase = new CreateRouteUseCase(repository);
const findAllRoutesUseCase = new FindAllRoutesUseCase(repository);
const findOneRouteUseCase = new FindOneRouteUseCase(repository);
const deleteRouteUseCase = new DeleteRouteUseCase(repository);
const updateTitleRouteUseCase = new UpdateTitleRouteUseCase(repository);
const updatePositionRouteUseCase = new UpdatePositionRouteUseCase(repository);

export {
  createRouteUseCase,
  findAllRoutesUseCase,
  findOneRouteUseCase,
  deleteRouteUseCase,
  updateTitleRouteUseCase,
  updatePositionRouteUseCase,
};
