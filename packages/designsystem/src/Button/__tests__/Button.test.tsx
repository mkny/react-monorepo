import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "../Button";

describe("<Button />", () => {
  const defaultProps = { label: "Button" };
  it("render", () => {
    const { asFragment } = render(<Button {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render as primary state", () => {
    render(<Button {...defaultProps} primary />);

    const btn = screen.getByRole("button");

    expect(btn).toHaveClass("storybook-button--primary");
  });
  it("should change backgroundColor", () => {
    render(<Button {...defaultProps} backgroundColor="red" />);

    const btn = screen.getByRole("button");

    expect(btn).toHaveStyle({ backgroundColor: "red" });
  });
});
