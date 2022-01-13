const ProfilePresenter = (props) => {
    const [name, setName] = React.useState(null);
    const [calories, setCalories] = React.useState(null);
    const [health, setHealth] = React.useState(null);
    const [time, setTime] = React.useState(null);
    
    React.useEffect(function(){
        function obs(){
            setName(props.model.name)
            setCalories(props.model.calories)
            setHealth(props.model.bmi.health)
            setTime(props.model.time)
        }
            props.model.addObserver(obs);
            return function(){props.model.removeObserver(obs)}
    } ,[])

    return(
    <div>
        <ProfileView
            name = {name}
            calories = {calories}
            health = {health}
            time = {time}
            logout = {x => props.model.logout()}
        />
    </div>)
}