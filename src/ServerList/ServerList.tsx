import React, { useCallback, useMemo, useState } from "react";
import { useGetServerList } from "./ServerListService";

const ServerList = () => {
  const { isLoading, data, isError } = useGetServerList();
  const [order, setOrder] = useState({ orderBy: "", order: "" });

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  const sort = () => {
    if (order.orderBy === "name") {
      return [...data].sort((a, b) => {
        if (order.order === "asc") {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name > b.name ? -1 : 1;
        }
      });
    }

    if (order.orderBy === "distance") {
      return [...data].sort((a, b) => {
        if (order.order === "asc") {
          return a.distance - b.distance;
        } else {
          return b.distance - a.distance;
        }
      });
    }
    return data;
  };

  let sortedData = sort();

  const toggleSort = (column: string) => {
    if (
      (order.orderBy === "" && order.order === "") ||
      column !== order.orderBy
    ) {
      setOrder({ orderBy: column, order: "asc" });
      sortedData = sort();
    } else if (order.orderBy === column && order.order === "asc") {
      setOrder({ orderBy: column, order: "desc" });
      sortedData = sort();
    } else if (order.orderBy === column && order.order === "desc") {
      setOrder({ orderBy: "", order: "" });
      sortedData = sort();
    }
  };

  if (sortedData) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th onClick={() => toggleSort("name")}>Name</th>
              <th onClick={() => toggleSort("distance")}>Distance</th>
            </tr>
            {sortedData &&
              sortedData.map((server: any) => {
                return (
                  <tr key={server.name + server.distance}>
                    <td>{server.name}</td>
                    <td>{server.distance}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
};

export default ServerList;
