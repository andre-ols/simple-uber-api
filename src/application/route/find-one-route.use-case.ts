import { LatLng, Route } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class FindOneRouteUseCase {
  constructor(private readonly routeRepository: IRouteRepository) {}

  async execute(id: string): Promise<CreateRouteOutput | undefined> {
    const route = await this.routeRepository.findOne(id);
    return route?.toJSON();
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
