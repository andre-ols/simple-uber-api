import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { Route } from "../../../domain/route/route.entity";
import { UpdateTitleRouteUseCase } from "../update-title-route.use-case";

describe("UpdateTitleRouteUseCase", () => {
  it("should update the title of a route", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new UpdateTitleRouteUseCase(repository);
    const updateSpy = jest.spyOn(repository, "update");
    const findOneSpy = jest.spyOn(repository, "findOne");

    const mockedRoute = new Route({
      endPosition: { lat: 1, lng: 2 },
      startPosition: { lat: 3, lng: 4 },
      title: "my title",
      points: [],
    });

    findOneSpy.mockResolvedValue(mockedRoute);

    // act
    await useCase.execute(mockedRoute.id, "new title");
    // assert
    expect(updateSpy).toBeCalledTimes(1);
    expect(updateSpy).toBeCalledWith(
      expect.objectContaining({
        id: mockedRoute.id,
        title: "new title",
        startPosition: mockedRoute.startPosition,
        endPosition: mockedRoute.endPosition,
        points: [],
      })
    );
  });
});
