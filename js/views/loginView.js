function LoginView(props){
    var name = "default";
    var pass = "x";
    return(
        <div>  
            <div>Username</div>
            <input placeholder = "Enter name..." type = "text" id = "loginName" onInput={(e)=> name = e.target.value} />

            <div>Password</div>
            <input placeholder = "Enter password..." type = "password" id = "loginPass" onInput = {(e)=> pass = e.target.value}/>

            <div><span><button onClick = {e =>  window.location.hash = "#create"}>Create account</button></span><span><button onClick = {e => props.loginUser({name, pass})}>Login</button></span></div>
        </div>
    )
}