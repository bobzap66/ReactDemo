function UserLogin()
{
    let msg=alert('hi')
    return (<>
    <h1>Welcome Back{msg}</h1></>)
}

function GuestLogin()
{
    return <h1>Conditional Render Demo Please sign up</h1>
}

function ConditionalRender(props) 
{
    const isLoggedIn = props.isLoggedIn;
    if(props.isLoggedIn)
    {
        return<UserLogin/>
    }
    return <GuestLogin/>
}

export default ConditionalRender;