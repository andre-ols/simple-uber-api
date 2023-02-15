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

  async findOne(id: string): Promise<Route | undefined> {
    return this.items.find((item) => item.id === id);
  }

  async update(route: Route): Promise<void> {
    const index = this.items.findIndex((item) => item.id === route.id);

    if (index === -1) throw new Error("Route not found");

    this.items[index] = route;
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) throw new Error("Route not found");

    this.items.splice(index, 1);
  }
}
