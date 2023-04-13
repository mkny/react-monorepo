import { render, screen, fireEvent } from "@testing-library/react";
import { logger } from "@monorepo/corelib";

import App from "./App";

jest.mock("@monorepo/corelib");

describe("<App /> tests", () => {
  it("render", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should be able to click and get a log", () => {
    render(<App />);
    const btn = screen.getByText(/my world/);

    fireEvent.click(btn);

    expect(logger).toHaveBeenCalledTimes(1);
  });
});
