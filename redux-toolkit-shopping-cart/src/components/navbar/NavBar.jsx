//instalar la libreria de iconos npm install react-icons
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
const NavBar = () => {
  //obtiene el valor de un state
  const { amount } = useSelector((store) => store.cart);
  return (
    <header>
      <h1>My store Bekia Cosmetics</h1>
      <div className="amount-container">
        <GrCart className="cart-icon" />
        <span className="badge">{amount}</span>
      </div>
    </header>
  );
};
export default NavBar;
