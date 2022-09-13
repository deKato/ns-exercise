import { render, screen } from "@testing-library/react";
import React from "react";
import ArrowUpIcon from "./ArrowUpIcon";
import MenuIcon from "./MenuIcon";

describe("Icon components", () => {
  it("should render icons", () => {
    render(
      <>
        <ArrowUpIcon />
        <MenuIcon />
      </>
    );
    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
  });
});
