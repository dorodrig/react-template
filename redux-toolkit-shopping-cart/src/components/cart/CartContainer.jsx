import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <section className="cart-container">
      <div className="cart-container__header">
        <h2>Your cart</h2>
      </div>
      <div className="cart-container__articles">
        <ul>
          {cartItems.map((item) => {
            //... destructure the item object
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default CartContainer;
