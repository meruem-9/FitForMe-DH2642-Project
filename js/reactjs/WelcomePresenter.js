const WelcomePresenter = (props) => {
    const [age, settingAge] = React.useState(null);
    const [weight, settingWeight] = React.useState(null);
    const [height, settingHeight] = React.useState(null);
    const [bmi, setBmi] = React.useState({bmi:0, health:""});
    const [calories, setCalories] = React.useState(null);

    React.useEffect(function(){
        function obs(){settingAge(props.model.age); settingWeight(props.model.weight);
            settingHeight(props.model.height); setBmi(props.model.bmi); 
            setCalories(props.model.calories);
            //DietSource.searchBMI({age:props.model.age, weight:props.model.weight, height:props.model.height})
            }
            props.model.addObserver(obs);
            return function(){props.model.removeObserver(obs)}
    } ,[])
    return (<div><WelcomeFormView 
    age = {age}
    weight = {weight}
    height = {height}
    calories = {calories}
    bmi = {bmi.bmi}
    health = {bmi.health}
    setActivity = {x => props.model.setActivityLevel(x)}
    setGender = {x => props.model.setGender(x)}
    setAge = {x => props.model.setAge(parseInt(x))}
    setHeight = {x => props.model.setHeight(parseInt(x))}
    setGoals = {x => props.model.setGoals(x)}
    setWeight = {x => props.model.setWeight(parseInt(x))}
    />
    </div>)
}