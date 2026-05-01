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
        const res = await axios.get("http://localhost:5000/user/info", {
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

 
  const addCart = async (product) => {
    if (!isLogged) {
      alert("Please login to continue");
      return;
    }

    const check = cart.every((item) => item._id !== product._id);

    if (!check) {
      alert("Product already in cart");
      return;
    }

    const newCart = [...cart, { ...product, quantity: 1 }];
    setCart(newCart);

    try {
      await axios.patch(
        "http://localhost:5000/user/addcart",
        { cart: newCart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Added to cart");
    } catch (err) {
      alert(err.response?.data?.msg || "Add to cart failed");
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart,  };
};

export default UserAPI;