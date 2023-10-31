import axios from "axios";

const getTasks = async () => {
    try {
        //hace el llamado al backend con api rest
        const result = await axios.get("http://localhost:3000/tasks");
        //si la respuesta es 200 entonces se modifica el estado
        if (result.status === 200) {
            // con el setTasks se modifica los campos del formulario
            return (result.data);
        }
    } catch (error) {
        console.log("No hubo conexion con el backend");
        return null;
    }
}
export default getTasks;