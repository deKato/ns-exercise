import axios from "axios";
import { useQuery } from "react-query";
import request from "../utils/axios.utils";

const getServerList = async () => {
  const response = await request({ method: "GET", url: "/servers" });
  return response.data;
};

export const useGetServerList = () => {
  return useQuery(["server-list"], () => getServerList());
};
