//instalar la libreria de iconos npm install react-icons
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="amount-container">
      <GrCart className="cart-icon" />
      <span className="badge">{amount}</span>
    </div>
  );
};
export default CartIcon;
