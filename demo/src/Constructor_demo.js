import React from 'react'
import { ReactDom } from 'react'

class Constructor_demo extends React.Component
{
    constructor()
    {
        super();
        this.state = {favoriteColor: "yellow"};
    }

    render()
    {
    return(<>
        <h1>constructor & Render Methods</h1>
        <h2>favoriteColor is {this.state.favoriteColor}</h2>

        </>)
    }

}
export default Constructor_demo;