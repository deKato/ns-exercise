import { useQuery } from "react-query";
import request from "../../utils/axios.utils";

interface IServerListResponse {
  name: string;
  distance: number;
}

const getServerList = async () => {
  const response = await request({ method: "GET", url: "/servers" });
  return response.data as IServerListResponse[];
};

export const useGetServerList = () => {
  return useQuery(["server-list"], () => getServerList());
};
