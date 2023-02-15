import { Route } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class FindOneRouteUseCase {
  constructor(private readonly routeRepository: IRouteRepository) {}

  async execute(id: string): Promise<Route | undefined> {
    const route = await this.routeRepository.findOne(id);
    return route;
  }
}
