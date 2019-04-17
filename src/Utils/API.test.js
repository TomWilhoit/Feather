import { fetchData } from "../Utils/API";

describe("fetchData", () => {
  const mockURL = "www.reddit.com";
  const mockLocations = ["sydney", "chattanooga"];
  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() => mockLocations)
      });
    });
  });

  it("should call fetch with the correct parameters", () => {
    fetchData(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it("should return data when response is successful", async () => {
    const result = await fetchData(mockURL);
    expect(result).toEqual(mockLocations);
  });

  it("should throw an error when response is not successful", () => {
    window.fetch = jest.fn(() => {
      throw new Error("Error - Status 500");
    });
    const expectedError = Error("Error - Status 500");
    expect(fetchData(mockURL)).rejects.toEqual(expectedError);
  });
});
