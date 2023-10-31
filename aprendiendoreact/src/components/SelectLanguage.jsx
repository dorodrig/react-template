import { useContext } from 'react';
import '../styles/Languages.scss';
import LocalizationContext from '../context/LocalizationContext';
import local from '../context/LocalizationData';
const SelectLanguage = () => {
    // obtiene el contexto para cambiar el lenguaje
    const {setLanguage}= useContext(LocalizationContext);

    
 return(
  <div className='Languages'>
  <span onClick={()=>setLanguage(local["es"])}> 🏴‍☠️ Español </span>
  <span onClick={()=>setLanguage(local["en"])}> 🏳 Ingles</span> 
  <span onClick={()=>setLanguage(local["fr"])}> 🥐 Frances</span>

  </div>

 );
};
 
export default SelectLanguage;