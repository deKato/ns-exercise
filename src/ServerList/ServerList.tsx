import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Common/Spinner/Spinner";
import { IRootState, ISortParams } from "../store/redux";
import { sortActions } from "../store/redux/sort";
import {
  StyledArrowContainer,
  StyledArrowUp,
  StyledTable,
  StyledTableHeader,
} from "./ServerList.styled";
import { useGetServerList } from "./ServerListService";

const sort = (order: ISortParams, data: any) => {
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

const ServerList = () => {
  const { isLoading, data, isError } = useGetServerList();
  const sortOrder = useSelector((state: IRootState) => state.sort.sortParams);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner/>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  const toggleSortHandler = (column: string) => {
    dispatch(sortActions.sort({ column }));
  };

  const sortedData = sort(sortOrder, data);
    return (
      <StyledTable>
        <tbody>
          <tr>
            <StyledTableHeader onClick={() => toggleSortHandler("name")}>
              <div data-testid="name-header">
                <span>Name</span>
                <StyledArrowContainer
                  $isAscending={sortOrder.order === "asc" ? true : false}
                  $isVisible={sortOrder.orderBy === "name"}
                >
                  <StyledArrowUp />
                </StyledArrowContainer>
              </div>
            </StyledTableHeader>
            <StyledTableHeader onClick={() => toggleSortHandler("distance")}>
              <div data-testid="distance-header">
                <span>Distance</span>
                <StyledArrowContainer
                  $isAscending={sortOrder.order === "asc" ? true : false}
                  $isVisible={sortOrder.orderBy === "distance"}
                >
                  <StyledArrowUp />
                </StyledArrowContainer>
              </div>
            </StyledTableHeader>
          </tr>
          {sortedData.map((server: any) => {
            return (
              <tr data-testid={'data-row'} key={server.name + server.distance}>
                <td>{server.name}</td>
                <td>{server.distance}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
};

export default ServerList;
