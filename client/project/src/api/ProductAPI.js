import { useState, useEffect } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8000/api/products");
      setProducts(res.data);
    };

    getProducts();
  }, []);

  return {
    products: [products, setProducts],
  };
};

export default ProductAPI;