import React from 'react'
import { ReactDom} from 'react'

class GetDerivedState extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {favoriteColor: "red"};
    }
    static getDerivedStateFromProps(props)
    {
        return {favoriteColor:props.fcolor}
    }

    render()
    {
        return(<>
        <h1>getDerivedStateFromProps Example</h1>
        <h2>favoriteColor is {this.state.favoriteColor}</h2>
        </>)
    }
}

export default GetDerivedState;