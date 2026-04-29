import { useState, useEffect } from "react";
import axios from "axios";

const UserAPI = (token) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const res = await axios.get("http://localhost:8000/user/info", {
          headers: { Authorization: token },
        });

        setIsAdmin(res.data.role === "admin");
      };

      getUser();
    }
  }, [token]);

  return {
    isAdmin: [isAdmin, setIsAdmin],
  };
};

export default UserAPI;