import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import { act } from "react-dom/test-utils";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import AuthContext from "../../store/auth/AuthContext";
import store from "../../store/redux";
import ServerListPage from "./ServerListPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AuthContextProvider } from "../../store/auth/AuthContextProvider";

describe("Server list page component", () => {
  it("should render", async () => {
    server.use(
      rest.get("https://playground.tesonet.lt/v1/servers", (_req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([{ name: "server 1", distance: "55" }])
        );
      })
    );
    await act(() => {
      render(
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <AuthContext.Provider value={{ logout: () => {} }}>
              <Router>
                <Routes>
                  <Route path="/" element={<ServerListPage />} />
                  <Route path="/logout" element={<div>Logout page</div>} />
                </Routes>
              </Router>
            </AuthContext.Provider>
          </QueryClientProvider>
        </Provider>
      );
    });
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Distance")).toBeInTheDocument();
  });
});
