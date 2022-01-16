function LoginView(props){
    var name = "default";
    var pass = "x";
    return(
        <div className="background">
        <img src= "FFM.png" className="logo"></img>
       
        <div className="roundedCorners">

        <p className="fontSize">Log in</p>    
            
            <div>Username</div>
            <input className="input" placeholder = "Enter name..." type = "text" id = "loginName" onInput={(e)=> name = e.target.value} />

            <div>Password</div>
            <input className="input" placeholder = "Enter password..." type = "password" id = "loginPass" onInput = {(e)=> pass = e.target.value}/>

            <div><span><button className="button" onClick = {e =>  window.location.hash = "#create"}>Create account</button></span><span><button className="button" onClick = {e => props.loginUser({name, pass})}>Login</button></span></div>

        </div>
        </div>
    )
}