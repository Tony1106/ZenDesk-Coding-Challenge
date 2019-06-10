import {
  makePaginationEndPoint,
  makeTicketEndPoint
} from "../../../src/ultils/EndPoints";

describe("Ultils -> Endpoints", () => {
  describe("test function makePaginationEndPoint() & makeTicketEndPoint()", () => {
    test("should return an tickets endpoint with per_page & page", () => {
      let endpoint =
        "http://localhost:4000/tickets?per_page=%per_page%&page=%page%";
      let [per_page, page] = [10, 2];
      expect(makePaginationEndPoint(endpoint, per_page, page)).toBe(
        "http://localhost:4000/tickets?per_page=10&page=2"
      );
    });

    test("should return an tickets endpoint with id", () => {
      let endpoint = "http://localhost:4000/tickets/:id";
      let id = 20;
      expect(makeTicketEndPoint(endpoint, id)).toBe(
        "http://localhost:4000/tickets/20"
      );
    });
  });
});
