const DietPlanPresenter = (props) => {
    const[calories, settingCalories] = React.useState(null);

    React.useEffect(function(){
        function obs(){
            settingCalories(props.model.calories)}
            props.model.addObserver(obs);
            return function(){props.model.removeObserver(obs)}
    } ,[])
    return (<div><DietPlanView 
    calories = {calories}
    />
    <HeaderView

    logout = {x => props.model.logout()}

/>
    </div>)
}