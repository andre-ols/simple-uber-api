import supertest from "supertest";
import { app } from "../../src/infra/http/express";

describe("Route e2e", () => {
  const request = supertest(app);

  describe("POST /route", () => {
    it("should create a route", async () => {
      const response = await request.post("/route").send({
        title: "route",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 4 },
      });
      expect(response.status).toBe(200);
      console.log(response.body);
      expect(response.body).toEqual({
        id: expect.any(String),
        title: "route",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 4 },
        points: [],
      });
    });
  });
});
