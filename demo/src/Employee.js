function Employees() 
{
    const persons = [
        {name:"George Baily", id:1947, dept:"Building"},
        {name:"Kris Kringle", id:1952,dept:"Toys"}, 
        {name:"Rooster Cogburn", id:1969, dept:"Security"}
    ]
    
    return(
        <>
        <h1>Employees</h1>
        <table>
       <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Department</th>
       </tr>
       {persons.map(p => (
       <tr>
        <td key={p.name}>{p.name}</td><td>{p.id}</td><td>{p.dept}</td>
        </tr>
       ))}
       </table>
        </>
    )
}

export default Employees;