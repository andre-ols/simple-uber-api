import { Route } from "./route.entity";

export interface IRouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
  findOne(id: string): Promise<Route | undefined>;
  update(route: Route): Promise<void>;
  delete(id: string): Promise<void>;
}
