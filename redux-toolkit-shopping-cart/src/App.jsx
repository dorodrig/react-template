//Para installar sass npm install sass -D
// para iniciar el proyecto se debe installar  npm init vite@latest --redux-toolkit-shopping-cart --template react
import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/navbar/NavBar";

// importa la libreria redux-toolkit  npm install @reduxjs/toolkit
const app = () => {
  return (
    <>
      <NavBar />;
      <CartContainer />;
    </>
  );
};

export default app;
