function WelcomeFormView(props){
    var loseGain = -1;
    var kg = 0;
    var goal = "";
    var age = 0;
    var weight = 0;
    var height = 0;
    var activity = "level_1";
    var gender = "male";
    var time 
    return(
        <div>
            <div>
    
                <div className = "marginleftfloat">
                    
                    <label>Age:</label>
                    <input placeholder = "enter age... " type = "text" id = "age" onInput={(e)=>{age = e.target.value; props.setAge(e.target.value)}}/>
                    
    
                </div>
                <div className = "marginleftfloat">
                    
                    <label>Weight:</label>
                    <input placeholder = "enter weight..." type = "text" id = "weight" onInput={(e)=>{weight = e.target.value; props.setWeight(e.target.value)}}/>
                    
    
                </div>
                <div className = "marginleftfloat">
                    <label>Height:</label>
                    <input placeholder = "enter height..." type = "text" id = "height" onInput={(e)=>{height = e.target.value; props.setHeight(e.target.value)}}/>
                </div>
    
    
                <div className = "marginleftfloat">
                    <label htmlFor = "Activity levels"> Choose activity level:</label>
                    <select id = "Activity levels" onChange = {e => {activity = e.target.value; props.setActivity(e.target.value)}}>
                    <option value = "level_1">Little to no exercise</option>
                    <option value = "level_2">Exercise 1-3 times/week</option>
                    <option value = "level_3">Exercise 4-5 times/week</option>
                    <option value = "level_4">Daily exercise or intense exercise 3-4 times/week</option>
                    <option value = "level_5">Intense exercise daily</option>
                    <option value = "level_6">Intense physical work</option>
                    </select>
                </div>
    
    
                <div>
                    <label>What is your goal</label>
                    <select id = "goal3" onChange = {e => {loseGain = parseInt(e.target.value);}}>
                    <option value = "-1">
                        Lose weight
                    </option>
                    <option value = "1">
                        Gain weight
                    </option>
                    </select>
                </div>
                
    
                <div>
                    <input placeholder = "Enter kg to lose/gain..." type = "Integer" onInput= {e => {kg = e.target.value; props.setGoals(calculateGoals(parseInt(e.target.value) * loseGain));
                     props.setTimeFrame(calculateWeeks(parseInt(e.target.value) * loseGain));}}>
                    </input>
                </div>
    
    
                <div className = "marginleftfloat">
                    <label htmlFor = "Gender">Gender:</label>
                    <select id = "Gender" onChange = {e => {gender = e.target.value; props.setGender(e.target.value)}}>
                    <option value = "male">Male</option>
                    <option value = "female">Female</option>
                    </select>
                </div>
    
    
                <div>BMI = {props.bmi} this bmi is {props.health || "(waiting for data)"}</div>
                <div>Calories per day = {props.calories || 0}</div>
                <div>Your goal weight can be reached in {props.weeks || 0} weeks</div>
                
                <div>
                    <span><button onClick = { e => window.location.hash = "#profile"}>Back</button></span>
                    
                </div>
            </div>
        </div>
    
    );
    }
    //Might be used
    //<span><button onClick = { e => props.calculate(age, weight, height, activity, gender, goal = calculateGoals(kg * loseGain), time = calculateWeeks(kg * loseGain))}></button></span>
    
    
    
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
    
    
    /* <div className = "marginleftfloat">
                    <label htmlFor = "Goals"> Goals:</label>
                    <select id = "Goals" onChange = {e => {props.setGoals(e.target.value)}}>
                    <option value = "maintain weight"> maintain weight</option>
                    <option value = "Mild weight loss">Mild weight loss</option>
                    <option value = "Weight loss">Weight loss</option>
                    <option value = "Extreme weight loss">Significant weight loss</option>
                    <option value = "Mild weight gain">Mild weight gain</option>
                    <option value = "Weight gain">Weight gain</option>
                    <option value = "Extreme weight gain">Significant weight gain</option>
                    </select>
                </div>*/