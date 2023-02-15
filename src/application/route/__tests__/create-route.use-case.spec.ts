import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { CreateRouteUseCase } from "../create-route.use-case";

describe("CreateRouteUseCase", () => {
  it("should create a new route", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const createUseCase = new CreateRouteUseCase(repository);
    const insertSpy = jest.spyOn(repository, "insert");
    const input = {
      title: "my title",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    };

    // act
    const output = await createUseCase.execute(input);

    // assert
    expect(insertSpy).toBeCalledTimes(1);
    expect(insertSpy).toBeCalledWith(
      expect.objectContaining({
        id: expect.any(String),
        title: input.title,
        startPosition: input.startPosition,
        endPosition: input.endPosition,
        points: [],
      })
    );
    expect(output).toStrictEqual({
      id: expect.any(String),
      title: input.title,
      startPosition: input.startPosition,
      endPosition: input.endPosition,
      points: [],
    });
  });
});
