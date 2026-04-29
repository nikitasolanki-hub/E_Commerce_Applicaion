import { useState, useEffect } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
        console.log("API Response:", res.data);
        setProducts(res.data);
    };
    
    getProducts();
  }, []);

  return {
    products: [products, setProducts]
  };
};

export default ProductAPI;