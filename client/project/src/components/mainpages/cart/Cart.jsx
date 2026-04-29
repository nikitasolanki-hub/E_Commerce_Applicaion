import { useContext } from "react";
import { GlobalState } from "../../../context/GlobalState";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart] = state.userAPI.cart;

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>
        Cart Empty
      </h2>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <div className="detail" key={product._id || product.product_id}>
          <img src={product.product?.images?.url} alt={product.product?.title} />

          <div className="box-detail">
            <div className="row">
              <h2>{product.product?.title}</h2>
              <h6>{product.product_id}</h6>
            </div>

            <span>${product.product?.price}</span>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold: {product.sold}</p>

            <Link to="/cart" className="cart">
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;