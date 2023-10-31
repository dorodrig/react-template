import PropTypes from "prop-types";
//npm install prop-types para poder llamar a PropTypes
//npm init vite@latest --template
import "../styles/Title.scss";
import { useContext } from "react";

import LocalizationContext from "../context/LocalizationContext";

const Title = ({ count }) => {
  // Obtiene el contexto
  const {language} = useContext(LocalizationContext);
  LocalizationContext;

  return (
    <div className="title">
      <h2>{language.title}</h2>
      <h5>
        {language.count}: {count}
      </h5>
    </div>
  );
};

// Propiedades por defecto
Title.defaultProps = {
  count:0,
};

// Define tipos de parámetros
Title.propTypes = {
  //text: PropTypes.string.isRequired,
  count: PropTypes.number,
  
};

export default Title;
