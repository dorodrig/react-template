// para iniciar un proyecto de react con vitel se ejecuta le comando npm init vite@latest --template react
//VITE_BACKEND_URL=http://localhost:3000/tasks/ esto es para crear el ambiente .env.local cuando se clone el repo

import { useEffect, useState } from "react";
import axios from "axios";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./styles/App.scss";
import LocalizationContext from "./context/LocalizationContext";
import SelectLanguage from "./components/SelectLanguage";
//variables de entorno
// cambio de idioma con hooks
import local from "./context/LocalizationData";

function App() {
  // esta utilizando hooks para crear un estado
  const [tasks, setTasks] = useState([]);
 const [language, setLanguage] = useState(local.en);

  //esta utilizando hooks para generar un efecto ademas recibe como parametro una funcion y un arreglo de dependencias
  useEffect(()=> {
 const  getTasks = async () =>{
   
  try {
    //hace el llamado al backend con api rest
    const result = await axios.get(import.meta.env.VITE_BACKEND_URL);
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
  const onDeleteHandler = async (id) => {
    try {
      if (confirm("Are you sure you want to delete the task?")) {
        // Elimina el elemento filtrando el arreglo por el id de cada tarea
        // No se puede modificar la variable tasks porque es INMUTABLE
        //hace el llamado al backend con api rest
      const result = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}${id}`);
      //si la respuesta es 200 entonces se modifica el estado
       if (result.status === 200){
        // con el setTasks se modifica los campos del formulario   
        const resultado = tasks.filter((tarea) => tarea.id !== id);
        // Modifica el estado
        setTasks(resultado);
        }
    }
    }catch (error) {
      console.log("No hubo conexion con el backend");
    }
  };

  const onCreateHandler = async (text) => {
    try {
       // Crea un objeto para la nueva tarea
    const newTask = {// id: crypto.randomUUID(), genera un id aleatorio      
      text,
    };
    const result = await axios.post(import.meta.env.VITE_BACKEND_URL, newTask);
    // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
     if(result.status === 201){
    const newTasks = [...tasks, result.data];
    // Modifica el estado
    setTasks(newTasks);

    } 
  } catch (error) {console.log("No hubo conexion con el backend");}
  };
  const handlerLanguagesChanges =(lang)=>{
    //en caso de los objetos se puede [] para acceder a las propiedades o . para acceder a las propiedades
    setLanguage(local[lang]);
  }
  
  return (
    <LocalizationContext.Provider value={{language,setLanguage}}>
    <div className="app">
      <Header count={tasks.length} />
      <SelectLanguage onChangeLanguages={handlerLanguagesChanges} />
      <AddTaskForm onCreateTask={onCreateHandler} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
    </div>
    </LocalizationContext.Provider>
  );
}

export default App;
