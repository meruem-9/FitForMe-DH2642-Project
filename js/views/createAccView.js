function CreateAccView(props){
    var name = "default";
    var pass = "";
    var pass2 = "x";
    var email = "default";
    return(
        
        <div div className = "background">
        <img src= "FFM.png" className="logo"></img>

        <div className= "roundedCorners2">
        <p className="fontSize">Create account</p>
        
            <div>Username</div>
            <input className="input2" autocomplete="off" placeholder = "Enter name..." type = "text" id = "CreateName" onInput={(e)=> name = e.target.value} />

            <div>Email</div>
            <input className="input2" autocomplete="off" placeholder = "Enter email..." type = "text" id = "CreateEmail" onInput = {(e)=> email = e.target.value}/>

            <div>Password</div>
            <input className="input2" placeholder = "Enter password..." type = "password" id = "CreatePass" onInput = {(e)=> pass = e.target.value}/>

            <div>Confirm password</div>
            <input className="input2" placeholder = "Enter password..." type = "password" id = "CreatePass2" onInput = {(e)=> pass2 = e.target.value}/>

            <div><span><button className="button"  onClick = {e => {if(pass == pass2 && name != "default" && email != "default"){props.createAccount({name, pass, email })} 
            else{if(pass != pass2)console.log("Passwords must match")}}}>Create account</button></span>
            <span><button className="button"  onClick = {e => window.location.hash = "#login"}>Back</button></span></div>
            
        </div>
        </div>
    )
}