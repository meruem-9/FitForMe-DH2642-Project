const CreatePresenter = (props) => {
    return(
    <div>
        <CreateAccView
            createAccount = {e => {createAccount(props.model, e.name, e.pass, e.email)}}
        />
    </div>)
}