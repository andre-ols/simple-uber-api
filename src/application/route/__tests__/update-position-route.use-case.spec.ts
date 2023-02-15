import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { UpdatePositionRouteUseCase } from "../update-position-route.use-case";

describe("UpdatePositionRouteUseCase", () => {
  it("should update route position", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new UpdatePositionRouteUseCase(repository);
    const findOneSpy = jest.spyOn(repository, "findOne");
    const updateSpy = jest.spyOn(repository, "update");
    const input = {
      id: "1",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    };

    // act
    await useCase.execute(input.id, input.startPosition, input.endPosition);

    // assert
    expect(findOneSpy).toBeCalledTimes(1);
    expect(findOneSpy).toBeCalledWith(input.id);
    expect(updateSpy).toBeCalledTimes(1);
    expect(updateSpy).toBeCalledWith(
      expect.objectContaining({
        id: input.id,
        startPosition: input.startPosition,
        endPosition: input.endPosition,
      })
    );
  });

  it("should not update route position if route does not exist", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new UpdatePositionRouteUseCase(repository);
    const findOneSpy = jest.spyOn(repository, "findOne");
    const updateSpy = jest.spyOn(repository, "update");
    const input = {
      id: "1",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    };

    findOneSpy.mockResolvedValue(undefined);

    // act
    await useCase.execute(input.id, input.startPosition, input.endPosition);

    // assert
    expect(findOneSpy).toBeCalledTimes(1);
    expect(findOneSpy).toBeCalledWith(input.id);
    expect(updateSpy).not.toBeCalled();
  });
});
