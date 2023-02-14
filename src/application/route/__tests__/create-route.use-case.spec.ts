import { IRouteRepository } from "../../../domain/route/route.repository";
import { CreateRouteUseCase } from "../create-route.use-case";

const mockRepository: jest.Mocked<IRouteRepository> = {
  findAll: jest.fn(),
  insert: jest.fn(),
};

describe("CreateRouteUseCase", () => {
  it("should create a new route", async () => {
    // arrange
    const createUseCase = new CreateRouteUseCase(mockRepository);
    const input = {
      title: "my title",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    };

    // act
    const output = await createUseCase.execute(input);

    // assert
    expect(mockRepository.insert).toBeCalledTimes(1);
    expect(mockRepository.insert).toBeCalledWith(
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
