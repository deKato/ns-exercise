import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button component", () => {
  it("should render", () => {
    const message = "Button is rendered";

    render(<Button>{message}</Button>);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
