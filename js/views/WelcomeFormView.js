function WelcomeFormView(props){
    return(
        <div>
            <div>
    
                <div className = "marginleftfloat">
                    
                    <label>Age:</label>
                    <input placeholder = "enter age... " type = "text" id = "age" onInput={(e)=>props.setAge(e.target.value)}/>
                    
    
                </div>
                <div className = "marginleftfloat">
                    
                    <label>Weight:</label>
                    <input placeholder = "enter weight..." type = "text" id = "weight" onInput={(e)=>props.setWeight(e.target.value)}/>
                    
                </div>
                <div className = "marginleftfloat">
                    <label>Height:</label>
                    <input placeholder = "enter height..." type = "text" id = "height" onInput={(e)=>props.setHeight(e.target.value)}/>
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
    
                <div className = "marginleftfloat">
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
                </div>
    
                <div className = "marginleftfloat">
                    <label htmlFor = "Gender">Gender:</label>
                    <select id = "Gender" onChange = {e => {props.setGender(e.target.value)}}>
                    <option value = "male">Male</option>
                    <option value = "female">Female</option>
    
                    </select>
                </div>
    
                <div>BMI = {props.bmi} this bmi is {props.health}</div>
                <div>Calories per day = {props.calories}</div>
                <div>
                    
                    <button onClick = { e => window.location.hash = "#diet"}>Calculate dietplan</button>
    
                </div>
    
    
            </div>
        </div>
    
    );
    
    }