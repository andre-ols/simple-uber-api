import { RouteRepositoryStub } from "../../../../test/helpers/route.repository.stub";
import { DeleteRouteUseCase } from "../delete-route.use-case";

describe("DeleteRouteUseCase", () => {
  it("should delete a route", async () => {
    // arrange
    const repository = new RouteRepositoryStub();
    const useCase = new DeleteRouteUseCase(repository);
    const deleteSpy = jest.spyOn(repository, "delete");

    // act
    await useCase.execute("id");

    // assert
    expect(deleteSpy).toBeCalledTimes(1);
    expect(deleteSpy).toBeCalledWith("id");
  });
});
