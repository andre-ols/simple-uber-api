import { LatLng, Route } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};
