const task =[
    {id:1,text : 'Running'},
    {id:2,text : 'Programming'},
    {id:3,text : 'Listening music'},
    {id:4,text : 'Playing football'}
];

 //const task =[];
 const user = 'david';
const Tasklist = () => {
    return (
   <>
   <p> welcome,{user||"Guest"}</p>
{//expresion ternaria 
   task.length < 0 ? (<h1>No taks</h1>) 
   :(
     <ul>
        {    /// dentro{} se puede escribir codigo js
             // un map que trae el arreglo de tareas y lo recorre y lo muestra en una lista "Importante el key como identificador"
        task.map((task) => <li key={task.id}>{task.text}</li>)            
        }
     </ul>
   )}
{task.length % 2 === 0 && <h1>La cantidad de tareas es par</h1> }

   
   </>
    
    );
}
export default Tasklist 