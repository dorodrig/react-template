import './App.css'

function App() {
  const nombre = 'David Rodriguez';
  const edad = 24;

  return (
    <div className='app'>
      <h1>¡Hola, mundo!</h1>
      <p>aca estamos mirando que con jsx puedo agregar codigo html y css con react</p>
      <p>Mi nombre es {nombre}</p>
      {/* esto es un if en jsx */}
      <p>{edad> 18 ?"adulto":"Niño"}</p>
    </div>
  )
}

export default App
