import Cookie from "js-cookie";

const setToken = (token: string) => {
  Cookie.set("act", token);
};

const getToken = () => {
  return Cookie.get("act");
};

const removeToken = () => {
  Cookie.remove("act");
};

export { removeToken, setToken, getToken };
