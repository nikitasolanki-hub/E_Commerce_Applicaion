import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductAPI from "../api/ProductAPI";
import UserAPI from "../api/UserAPI";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (!firstLogin) return;

    const refreshToken = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/user/refresh_token",
          { withCredentials: true }
        );
        setToken(res.data.accesstoken);
      } catch {
        setToken("");
      }
    };

    refreshToken();
  }, []);

   const state = {
    token: [token, setToken],
    productsAPI: ProductAPI(),
    userAPI: UserAPI(token),
  };

  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};