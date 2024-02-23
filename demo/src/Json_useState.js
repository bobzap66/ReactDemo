import React, {useState} from 'react'

function Json_UseState()
{
    const [Employee, setEmployee] = useState ({
        empid:10011,
        ename: 'John',
        city:'Chennai'
    });

    return(<>
    <h1>Emp id is:{Employee.empid}</h1>
    <p>Emplyee Name: {Employee.ename} and Location is {Employee.city}</p>
    </>)
}

export default Json_UseState;