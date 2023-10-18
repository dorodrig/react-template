// npm install prop-types es para validar los tipos de datos que se pasan por props
import Proptypes from 'prop-types'
/* eslint-disable react/prop-types */
//const Title = (props)=>{ valor directo

const Title = ({text, small})=>{
return(
<>
 {/* <h1>{props.text}</h1>
 <h3>{props.small}</h3>  CON CALOR DIRECTO */}
 <h1>{text}</h1>
 <h3>{small}</h3>

</>
)
}
Title.defaultProps={
    text:'Titulo por defecto',
    small:'subtitulo por defecto'
}
//define tipos de parametros 
Title.propTypes={
    text:Proptypes.string,
    small:Proptypes.string
}

 export default Title;