import PropTypes from "prop-types";
//npm install prop-types para poder llamar a PropTypes
//npm init vite@latest --template
import "../styles/Title.scss";

const Title = ({ text, small }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <h5>{small}</h5>
    </div>
  );
};

// Propiedades por defecto
Title.defaultProps = {
  text: "Admin Tareas",
  small: "App",
};

// Define tipos de parámetros
Title.propTypes = {
  //text: PropTypes.string.isRequired,
  text: PropTypes.string,
  small: PropTypes.string,
};

export default Title;
