import { LatLng } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class FindAllRoutesUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(): Promise<CreateRouteOutput> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}[];
