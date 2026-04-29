import { useState, useEffect } from "react";
import axios from "axios";

const UserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!token) return;

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLogged(true);
        setIsAdmin(res.data.role === "admin");
        setCart(res.data.cart || []);
      } catch (err) {
        console.log(err.response?.data?.msg || err.message);
        setIsLogged(false);
        setIsAdmin(false);
      }
    };

    getUser();
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
  };
};

export default UserAPI;