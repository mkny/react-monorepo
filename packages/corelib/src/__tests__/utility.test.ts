import { logger } from "..";

describe("Custom logger tests", () => {
  it("should be able to call logger function", () => {
    const fn = jest.spyOn(global.console, "log");

    logger("hello world");

    expect(fn).toHaveBeenCalledWith("hello world");

    fn.mockReset();
    fn.mockRestore();
  });
});
