const task =[
    {id:1,text : 'Running'},
    {id:2,text : 'Programming'},
    {id:3,text : 'Listening music'},
    {id:4,text : 'Playing football'}
];


const Tablet = () => {
    return (
 <table>
     <thead>

        <tr>
            <th>id</th>   
            <th>Hobbies</th>  
        </tr>        
        </thead>
        <tbody>          
                  
        {   
             // dentro{} se puede escribir codigo js<li key={task.id}>{task.text}</li>)
             // un map que trae el arreglo de tareas y lo recorre y lo muestra en una lista "Importante el key como identificador"
            //falta agregar style
             task.map((task) => (
                 <tr key={task.id}>                    
                    <td>{task.id}</td>
                    <td>{task.text}</td>
                </tr> 
            ))
        }
       </tbody>
     </table>
    )
}
export default Tablet 