import { useState} from 'react'

function Without_UseContext()
{
    const [user, setUser]= useState("Sachin");

    return(<>
    <h1>Component1</h1>
    <h2>{`Hello ${user}`}</h2>
    <Component2 user={user}/>
    </>)


}

function Component2({user})
{
    return(<>
    <h1>Component2</h1>
    <Component3 user={user}/>
    </>);
}

function Component3({user}) 
{
    return(<>
        <h1>Component3</h1>
        <Component4 user={user}/>
    </>);
}

function Component4({user}) 
{
    return(<>
        <h1>Component4</h1>
        <Component5 user={user}/>
    </>);
}

function Component5({user}) 
{
    return(<>
        <h1>Component5</h1>
        <h2>{`Hello ${user} again!`}</h2>
    </>);
}

export default Without_UseContext;