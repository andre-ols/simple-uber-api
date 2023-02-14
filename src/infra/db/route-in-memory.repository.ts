import { Route } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class RouteInMemoryRepository implements IRouteRepository {
  private items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}