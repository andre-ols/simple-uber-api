import { IRouteRepository } from "../../domain/route/route.repository";

export class UpdateTitleRouteUseCase {
  constructor(private readonly routeRepository: IRouteRepository) {}

  async execute(id: string, title: string): Promise<void> {
    const route = await this.routeRepository.findOne(id);
    if (route) {
      route.updateTitle(title);
      await this.routeRepository.update(route);
    }
  }
}
