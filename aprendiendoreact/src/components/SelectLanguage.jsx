import PropTypes from 'prop-types';
import '../styles/Languages.scss';
const SelectLanguage = ({ onChangeLanguages }) => {
 return(
  <div className='Languages'>
  <span onClick={()=>onChangeLanguages("es")}> 🏴‍☠️ Español </span>
  <span onClick={()=>onChangeLanguages("en")}> 🏳 Ingles</span> 
  <span onClick={()=>onChangeLanguages("fr")}> 🥐 Frances</span>

  </div>

 );
};
SelectLanguage.propTypes = {
    onChangeLanguages: PropTypes.func,
} 
export default SelectLanguage;