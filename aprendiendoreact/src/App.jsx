// para iniciar un proyecto de react con vitel se ejecuta le comando npm init vite@latest --template react
import { useEffect, useState } from "react";
import axios from "axios";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./styles/App.scss";


function App() {
  // esta utilizando hooks para crear un estado
  const [tasks, setTasks] = useState([]);
  //esta utilizando hooks para generar un efecto ademas recibe como parametro una funcion y un arreglo de dependencias
  useEffect(()=> {
 const  getTasks = async () =>{
   
  try {
    //hace el llamado al backend con api rest
    const result = await axios.get('http://localhost:3000/tasks');
    //si la respuesta es 200 entonces se modifica el estado
    if (result.status === 200){
      // con el setTasks se modifica los campos del formulario
      setTasks(result.data);
    }   
  }catch (error){
    console.log("No hubo conexion con el backend");    
  }

 }  
 getTasks();

  }, []);
  const onDeleteHandler = (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      // No se puede modificar la variable tasks porque es INMUTABLE
      const resultado = tasks.filter((tarea) => tarea.id !== id);
      // Modifica el estado
      setTasks(resultado);
    }
  };

  const onCreateHandler = (text) => {
    // Crea un objeto para la nueva tarea
    const newTask = {
      id: crypto.randomUUID(),
      text,
    };
    // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
    const newTasks = [...tasks, newTask];
    // Modifica el estado
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header count={tasks.length} />
      <AddTaskForm onCreateTask={onCreateHandler} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
    </div>
  );
}

export default App;
