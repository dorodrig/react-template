import './App.css'
import Heards from './components/Heards';
import Tasklist from './components/Tasklist';
import Tablet from './components/Tablet';
function App() {
  const nombre = 'David Rodriguez';
  const edad = 24;

  return (
    <div className='app'>
      {/* <h1>¡Hola, mundo!</h1>
      <p>aca estamos mirando que con jsx puedo agregar codigo html y css con react</p>     
      esto es un if en jsx */}
       <p>Mi nombre es {nombre}</p>
       <p>Mi edad es {edad}</p>
      <p>{edad> 18 ?"soy adulto":"soy Niño"}</p>
      <Heards/>
      <Tasklist/>
    
    </div>
  )
}

export default App
