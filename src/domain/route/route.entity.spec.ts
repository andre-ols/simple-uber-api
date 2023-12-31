import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Entity", () => {
  describe("constructor", () => {
    it("should create a route without point", () => {
      const routeProps: RouteProps = {
        title: "my route",
        startPosition: { lat: 0, lng: 1 },
        endPosition: { lat: 2, lng: 3 },
      };
      const route = new Route(routeProps);
      expect(route.props).toStrictEqual({
        ...routeProps,
        points: [],
      });
    });

    it("should create a route with point", () => {
      const routeProps: RouteProps = {
        title: "my route",
        startPosition: { lat: 0, lng: 1 },
        endPosition: { lat: 2, lng: 3 },
        points: [{ lat: 10, lng: 11 }],
      };
      const route = new Route(routeProps);
      expect(route.id).toBeDefined();
      expect(route.props).toStrictEqual({
        ...routeProps,
        points: [{ lat: 10, lng: 11 }],
      });
    });

    it('should throw an error if "startPosition" is invalid', () => {
      const routeProps: RouteProps = {
        title: "my route",
        startPosition: { lat: 91, lng: 1 },
        endPosition: { lat: 2, lng: 3 },
      };
      expect(() => new Route(routeProps)).toThrowError("invalid lat");
    });
  });

  it("should update title", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    route.updateTitle("title updated");
    expect(route.title).toBe("title updated");
  });

  it("should update position", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  it("should update points", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const points: LatLng[] = [{ lat: 10, lng: 20 }];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});
