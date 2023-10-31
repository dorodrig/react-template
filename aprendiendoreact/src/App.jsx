// para iniciar un proyecto de react con vitel se ejecuta le comando npm init vite@latest --template react
//VITE_BACKEND_URL=http://localhost:3000/tasks/ esto es para crear el ambiente .env.local cuando se clone el repo
import { useEffect, useState, useReducer } from "react";
//componentes
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SelectLanguage from "./components/SelectLanguage";
//variables de entorno
// cambio de idioma con hooks
//contexto
import local from "./context/LocalizationData";
import LocalizationContext from "./context/LocalizationContext";
//reducer
import taskReducer from "./reducers/taskReducers";
import { GET, ADD, DELETE } from "./reducers/action";
//style
import "./styles/App.scss";
//API
import getTasks from "./api/getTasks";
import createTask from "./api/createTask";
import deleteTask from "./api/deleteTask";
function App() {
  // utilizando hooks reducer
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [language, setLanguage] = useState(local.en);

  //esta utilizando hooks para generar un efecto ademas recibe como parametro una funcion y un arreglo de dependencias
  useEffect(() => {
    const loadTask = async () => {
      const tasks = await getTasks();
      console.log(tasks);
      if (tasks) {
        dispatch({ type: GET, tasks });
      } else {
        dispatch({ type: GET, tasks: [] });
      }
    };
    loadTask();
  }, []);

  const onDeleteHandler = async (id) => {
    // COMO DEVUELVE UN TRUE O FALSE SE PASA EL ID DENTRO DEL IF
    if (await deleteTask(id)) {
      //modifica el estado
      dispatch({ type: DELETE, id });
    }
  };

  const onCreateHandler = async (text) => {
    //crea la tarea
    const newTask = await createTask(text);
    if (newTask) {
      dispatch({ type: ADD, newTask });
    }
  };
  const handlerLanguagesChanges = (lang) => {
    //en caso de los objetos se puede [] para acceder a las propiedades o . para acceder a las propiedades
    setLanguage(local[lang]);
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage }}>
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
