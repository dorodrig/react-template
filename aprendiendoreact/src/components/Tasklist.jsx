const task =[
    {id:1,text : 'Running'},
    {id:2,text : 'Programming'},
    {id:3,text : 'Listening music'},
    {id:4,text : 'Playing football'}
];


const Tasklist = () => {
    return (
    //   <ul>
    //      <il> Runnign </il> esta es una lista de tareas directa pero se mejor para utilizar con arreglo *
    //      <il> Programming  </il>
    //     <il>Listening music  </il> 
    //   </ul>
     <ul>
        {   
             // dentro{} se puede escribir codigo js
             // un map que trae el arreglo de tareas y lo recorre y lo muestra en una lista "Importante el key como identificador"
            task.map((task) => <li key={task.id}>{task.text}</li>)
        }
     </ul>
    )
}
export default Tasklist 