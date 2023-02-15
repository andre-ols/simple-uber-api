import { Route } from "../../src/domain/route/route.entity";
import { IRouteRepository } from "../../src/domain/route/route.repository";

export class RouteRepositoryStub implements IRouteRepository {
  async insert(route: Route): Promise<void> {}

  async findAll(): Promise<Route[]> {
    return [];
  }

  async findOne(id: string): Promise<Route | undefined> {
    const route = new Route(
      {
        endPosition: {
          lat: 0,
          lng: 0,
        },
        startPosition: {
          lat: 0,
          lng: 0,
        },
        title: "title",
        points: [],
      },
      id
    );

    return route;
  }

  async update(route: Route): Promise<void> {}
}
