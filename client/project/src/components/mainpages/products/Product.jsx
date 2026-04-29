import { useContext } from "react";
import { GlobalState } from "../../../context/GlobalState";
import ProductLists from "../utils/ProductLists/ProductList";

const Product = () => {
  const state = useContext(GlobalState);

  const [products] = state.productsAPI.products || [[]];
  const [isAdmin] = state.userAPI.isAdmin || [false];

  return (
    <div className="products">
      {!Array.isArray(products) || products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <ProductLists
            key={product._id}
            product={product}
            isAdmin={isAdmin}
          />
        ))
      )}
    </div>
  );
};

export default Product;