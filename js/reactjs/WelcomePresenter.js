const WelcomePresenter = (props) => {
    const [age, settingAge] = React.useState(null);
    const [weight, settingWeight] = React.useState(null);
    const [height, settingHeight] = React.useState(null);
    const [bmi, setBmi] = React.useState({bmi:0, health:""});
    const [calories, setCalories] = React.useState(null);
    const [timeFrame, setTimeFrame] = React.useState(null);

    React.useEffect(function(){
        function obs(){settingAge(props.model.age); settingWeight(props.model.weight);
            settingHeight(props.model.height); setBmi(props.model.bmi); 
            setCalories(props.model.calories); setTimeFrame(props.model.time);
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
    weeks = {timeFrame}
    setTimeFrame = {x => props.model.setTimeFrame(x)}
    setActivity = {x => props.model.setActivityLevel(x)}
    setGender = {x => props.model.setGender(x)}
    setAge = {x => props.model.setAge(parseInt(x))}
    setHeight = {x => props.model.setHeight(parseInt(x))}
    setGoals = {x => props.model.setGoals(x)}
    setWeight = {x => props.model.setWeight(parseInt(x))}
    /* Maybe change to this? */ calculate = {x => props.model.setTimeFrame()}
    />
    </div>)
}


function calculateGoals(x){
    if (x == 0)
        return "maintain weight";
    if (x < -4)
        return "Extreme weight loss";
    if (x < -2)
        return "Weight loss";
    if (x < 0)
        return "Mild weight loss";
    if(x > 4)
        return "Extreme weight gain";
    if(x > 2)
        return "Weight gain";
    if(x > 0)
        return "Mild weight gain";
}

function calculateWeeks(x){
    if (x == 0)
        return 0;
    if (x < -4)
        return (x/(-1)).toFixed(0);
    if (x < -2)
        return  (x/(-0.5)).toFixed(0);
    if (x < 0)
        return (x/(-0.25)).toFixed(0);
    if(x > 4)
        return (x/(1)).toFixed(0);
    if(x > 2)
        return (x/(0.5)).toFixed(0);
    if(x > 0)
        return (x/(0.25)).toFixed(0);
}