const WelcomePresenter = (props) => {
    const [age, settingAge] = React.useState(null);
    const [weight, settingWeight] = React.useState(null);
    const [height, settingHeight] = React.useState(null);
    const [bmi, setBmi] = React.useState({bmi:0, health:""});
    const [calories, setCalories] = React.useState(null);
    const [timeFrame, setTime] = React.useState(0);
    const [loseGain, setLoseGain] = React.useState(-1);
    const[kg, setKg] = React.useState(0);

    React.useEffect(function(){
        function obs(){settingAge(props.model.age); settingWeight(props.model.weight);
            settingHeight(props.model.height); setBmi(props.model.bmi); setKg(props.model.kgTarget);
            setCalories(props.model.calories); setTime(props.model.time); setLoseGain(props.model.loseGain);
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
    loseGain = {loseGain}
    kgTarget = {kg}
    setKgTarget = {x => props.model.setKgTarget(x)}
    setTimeFrame = {x => props.model.setTimeFrame(x)}
    setActivity = {x => props.model.setActivityLevel(x)}
    setGender = {x => props.model.setGender(x)}
    setAge = {x => props.model.setAge(parseInt(x))}
    setHeight = {x => props.model.setHeight(parseInt(x))}
    setGoals = {x => props.model.setGoals(x)}
    setWeight = {x => props.model.setWeight(parseInt(x))}
    setLoseGain = {x => props.model.setLoseGain(x)}
    />¨
    <HeaderView

logout = {x => props.model.logout()}

/>
    </div>)
}


