import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import store from "../../store/redux";
import ServerList from "./ServerList";

const serverListResponse = [
  { name: "server 1", distance: 54 },
  { name: "server 2", distance: 55 },
  { name: "server 4", distance: 55 },
  { name: "server 3", distance: 56 },
  { name: "server 5", distance: 53 },
];

describe("Server list component", () => {
  const nameColumnText = "Name";
  const distanceColumnText = "Distance";
  const rowTestId = "data-row";

  it("should render", async () => {
    const user = userEvent.setup();
    server.use(
      rest.get("https://playground.tesonet.lt/v1/servers", (_req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json(serverListResponse));
      })
    );
    render(
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <ServerList />
        </QueryClientProvider>
      </Provider>
    );

    expect(await screen.findByText(nameColumnText)).toBeInTheDocument();
    let dataRows = screen.getAllByTestId(rowTestId);

    // Test sort by name

    validateRows(dataRows);

    await user.click(screen.getByText(nameColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows, "nameAsc");

    await user.click(screen.getByText(nameColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows, "nameDesc");

    await user.click(screen.getByText(nameColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows);

    // Test sort by distance

    await user.click(screen.getByText(distanceColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows, "distanceAsc");

    await user.click(screen.getByText(distanceColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows, "distanceDesc");

    await user.click(screen.getByText(distanceColumnText));
    dataRows = screen.getAllByTestId(rowTestId);
    validateRows(dataRows);
  });

  it("should return error if error occured", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retryDelay: 1,
          retry: 0,
        },
      },
    });

    server.use(
      rest.get("https://playground.tesonet.lt/v1/servers", (_req, res, ctx) => {
        return res.once(
          ctx.status(403),
          ctx.json({
            errorMessage: `Smth happened`,
          })
        );
      })
    );
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ServerList />
        </QueryClientProvider>
      </Provider>
    );
    expect(await screen.findByText("Error occurred")).toBeInTheDocument();
  });
});

const validateRows = (rows: any, order = "none") => {
  const descName = [
    { name: "server 5", distance: 53 },
    { name: "server 4", distance: 55 },
    { name: "server 3", distance: 56 },
    { name: "server 2", distance: 55 },
    { name: "server 1", distance: 54 },
  ];
  const ascName = descName.slice().reverse();

  const distanceDesc = [
    { name: "server 3", distance: 56 },
    { name: "server 2", distance: 55 },
    { name: "server 4", distance: 55 },
    { name: "server 1", distance: 54 },
    { name: "server 5", distance: 53 },
  ];

  const distanceAsc = [
    { name: "server 5", distance: 53 },
    { name: "server 1", distance: 54 },
    { name: "server 2", distance: 55 },
    { name: "server 4", distance: 55 },
    { name: "server 3", distance: 56 },
  ];

  const orderMap = {
    none: serverListResponse,
    nameAsc: ascName,
    nameDesc: descName,
    distanceAsc: distanceAsc,
    distanceDesc: distanceDesc,
  };

  for (let i = 0; i < rows.length; i++) {
    expect(rows[i]).toHaveTextContent(
      orderMap[order as keyof typeof orderMap][i].name
    );
    expect(rows[i]).toHaveTextContent(
      orderMap[order as keyof typeof orderMap][i].distance.toString()
    );
  }
};
