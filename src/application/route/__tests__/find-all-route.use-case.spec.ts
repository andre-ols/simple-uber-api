import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { FindAllRoutesUseCase } from "../find-all-route.use-case";

describe("FindAllRouteUseCase", () => {
  it("should find all routes", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new FindAllRoutesUseCase(repository);
    const findAllSpy = jest.spyOn(repository, "findAll");

    // act
    const output = await useCase.execute();

    // assert
    expect(findAllSpy).toBeCalledTimes(1);
    expect(output).toStrictEqual([]);
  });
});
