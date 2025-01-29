import fetchMock from "fetch-mock";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { fetchStatus } from ".";

beforeEach(() => {
  fetchMock.mockGlobal();
});

afterEach(() => {
  fetchMock.hardReset();
});

describe("index", () => {
  beforeEach(() => {
    fetchMock.get("https://example.com", 200);
  });

  it("returns 200", async () => {
    expect(await fetchStatus("https://example.com")).toBe(200);
  });

  describe("with 404 response", () => {
    beforeEach(() => {
      fetchMock.get("https://example.com", 404);
    });

    it("returns 404", async () => {
      expect(await fetchStatus("https://example.com")).toBe(404);
    });
  });
});
