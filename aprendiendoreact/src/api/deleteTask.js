import axios from "axios";

const deleteTask = async (id) => {

    try {

        const result = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}${id}`);
        //si la respuesta es 200 entonces se modifica el estado
        if (result.status === 200) {
            return true;
        }

    } catch (error) {
        console.log("No hubo conexion con el backend");
        return false;
    }
};
export default deleteTask;