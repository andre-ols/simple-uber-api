import { LatLng } from "../../domain/route/route.entity";
import { IRouteRepository } from "../../domain/route/route.repository";

export class UpdatePositionRouteUseCase {
  constructor(private readonly routeRepository: IRouteRepository) {}

  async execute(
    id: string,
    startPosition: LatLng,
    endPosition: LatLng
  ): Promise<void> {
    const route = await this.routeRepository.findOne(id);
    if (route) {
      route.updatePosition(startPosition, endPosition);
      await this.routeRepository.update(route);
    }
  }
}
