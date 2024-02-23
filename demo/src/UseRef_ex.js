import { useRef } from 'react'

function UseRef_ex()
{
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    };

    return(
        <>
        <h1>Use Ref Demo</h1>
        <input type= "text" ref={inputElement}/>
        <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export default UseRef_ex;