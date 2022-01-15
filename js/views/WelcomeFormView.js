function WelcomeFormView(props){
    return(
        <div className="center">
            <div>
    
                <div className = "marginleftfloat">
                    
                    <label>Age:</label>
                    <input placeholder = "enter age... " type = "text" id = "age" onInput={(e)=>{props.setAge(e.target.value)}}/>
                    
    
                </div>
                <div className = "marginleftfloat">
                    
                    <label>Weight:</label>
                    <input placeholder = "enter weight..." type = "text" id = "weight" onInput={(e)=>{props.setWeight(e.target.value)}}/>
                    
    
                </div>
                <div className = "marginleftfloat">
                    <label>Height:</label>
                    <input placeholder = "enter height..." type = "text" id = "height" onInput={(e)=>{props.setHeight(e.target.value)}}/>
                </div>
    
    
                <div className = "marginleftfloat">
                    <label htmlFor = "Activity levels"> Choose activity level:</label>
                    <select id = "Activity levels" onChange = {e => {props.setActivity(e.target.value)}}>
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
                    <select id = "goal3" onChange = {e => {props.setLoseGain(parseInt(e.target.value)); props.setGoals(calculateGoals(parseInt(e.target.value) * props.kgTarget));
                     props.setTimeFrame(calculateWeeks(parseInt(e.target.value) * props.kgTarget));}}>
                    <option value = "-1">
                        Lose weight
                    </option>
                    <option value = "1">
                        Gain weight
                    </option>
                    </select>
                </div>
                
    
                <div>
                    <input placeholder = "Enter kg to lose/gain..." type = "Integer" onInput= {e => {props.setKgTarget(e.target.value); props.setGoals(calculateGoals(parseInt(e.target.value) * props.loseGain));
                     props.setTimeFrame(calculateWeeks(parseInt(e.target.value) * props.loseGain));}}>
                    </input>
                </div>
    
    
                <div className = "marginleftfloat">
                    <label htmlFor = "Gender">Gender:</label>
                    <select id = "Gender" onChange = {e => {props.setGender(e.target.value)}}>
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
    