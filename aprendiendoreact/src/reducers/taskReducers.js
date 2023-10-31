import { GET, ADD, DELETE } from "../reducers/action";
//los reduce reciben dos parametros, el estado y la accion
const taskReducer = (state, action) => {
    // CENTRALIZAR LAS ACCIONES DEL REDUCE
    switch (action.type) {
        case GET:
            return action.tasks ? [...action.tasks] : [];
        case ADD:
            return [...state, action.newTask];
        case DELETE:
            return state.filter((task) => task.id !== action.id);
        default:
            break;
    };
}
export default taskReducer;