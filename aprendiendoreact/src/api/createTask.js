import axios from "axios";

const createTask = async (text) => {
    try {
        // Crea un objeto para la nueva tarea
        const newTask = {// id: crypto.randomUUID(), genera un id aleatorio      
            text,
        };
        const result = await axios.post("http://localhost:3000/tasks", newTask);
        // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
        if (result.status === 201) {
            return result.data;


        }
    } catch (error) {
        console.log("No hubo conexion con el backend");
        return null;
    }

}
export default createTask;