const LoginPresenter = (props) => {
    return(
    <div>
        <LoginView
            setName = {name => props.model.setName(name)}
            setPass = {pass => props.model.setPass(pass)}
            setEmail = {email => props.model.setEmail(email)}
            loginUser = {e => {logIn(props.model, e.name, e.pass);}}
        />
    </div>)
}

//logInUser(props.model, e.name, e.email, e.pass)
