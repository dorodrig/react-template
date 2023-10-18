const task =[
    {id:1,text : 'Running'},
    {id:2,text : 'Programming'},
    {id:3,text : 'Listening music'},
    {id:4,text : 'Playing football'}
];


const Tablet = () => {
    return (
      <table border="2px">
        <thead>
          <tr>
            <th>id</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export default Tablet 