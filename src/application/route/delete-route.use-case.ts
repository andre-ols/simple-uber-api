import { IRouteRepository } from "../../domain/route/route.repository";

export class DeleteRouteUseCase {
  constructor(private readonly routeRepository: IRouteRepository) {}

  async execute(id: string): Promise<void> {
    await this.routeRepository.delete(id);
  }
}
