import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { server } from "../../../mocks/server";
import { AuthContextProvider } from "../../../store/auth/AuthContextProvider";
import store from "../../../store/redux";
import PageHeader from "./PageHeader";

describe("Page header component", () => {
  it("should logout", async () => {
    const user = userEvent.setup();
    server.use(
      rest.get("https://playground.tesonet.lt/v1/servers", (_req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([{ name: "server 1", distance: "55" }])
        );
      })
    );
    render(
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <AuthContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<PageHeader />} />
                <Route path="/logout" element={<div>Logout page</div>} />
              </Routes>
            </Router>
          </AuthContextProvider>
        </QueryClientProvider>
      </Provider>
    );

    await user.click(screen.getByText("Menu"));
    expect(screen.getByText("Logout")).toBeVisible();
    await user.click(screen.getByText("Server List"));
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();

    await user.click(screen.getByText("Menu"));
    await user.click(screen.getByText("Logout"));
    expect(await screen.findByText("Logout page")).toBeInTheDocument();
  });
});
