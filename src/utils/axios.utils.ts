import axios from "axios";

const client = axios.create({ baseURL: "https://playground.tesonet.lt/v1" });

const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem(
    "token"
  )}`;

  const onSuccess = (response: any) => response;

  return await client(options).then(onSuccess);
};

export default request;
