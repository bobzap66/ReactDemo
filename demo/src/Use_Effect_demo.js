import { useState, useEffect } from 'react';

function Use_Effect_demo() 
{
    const[count, setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=> {
            setCount((count)=> count+1)
        }, 1000);

    });

    return(<>
    <h2>Use Effect Demo</h2>
    <h1>I have Rendered {count} times</h1>
    </>)
}

export default Use_Effect_demo;