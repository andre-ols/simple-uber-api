import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { FindOneRouteUseCase } from "../find-one-route.use-case";

describe("FindOneRouteUseCase", () => {
  it("should find all routes", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new FindOneRouteUseCase(repository);
    const route = await repository.findOne("1");
    const findOneSpy = jest.spyOn(repository, "findOne");

    // act
    const output = await useCase.execute("1");

    // assert
    expect(findOneSpy).toBeCalledTimes(1);
    expect(findOneSpy).toBeCalledWith("1");
    expect(output).toStrictEqual(route?.toJSON());
  });
});
