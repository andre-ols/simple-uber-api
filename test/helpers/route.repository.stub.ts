import { Route } from "../../src/domain/route/route.entity";
import { IRouteRepository } from "../../src/domain/route/route.repository";

export class RouteRepositoryStub implements IRouteRepository {
  async insert(route: Route): Promise<void> {}

  async findAll(): Promise<Route[]> {
    return [];
  }

  async findOne(id: string): Promise<Route | undefined> {
    return undefined;
  }

  async update(route: Route): Promise<void> {}
}
