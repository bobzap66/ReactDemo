import React from "react";

function PropsDemo1(props) {
    return (
        <div>
            <p>My name is: {props.name}.</p>
            <p>I live in: {props.city}.</p>
            <p>I am: {props.age} years old.</p>
        </div>
    )
}

export default PropsDemo1;