import axios from "axios";

export const loginToApp = async (username: string, password: string) => {
  const data = {
    username,
    password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  const response = await axios.post(
    "https://playground.tesonet.lt/v1/tokens",
    data,
    config
  );
};
