function ProfileView(props){
    return(
        <div className = "background">
           <div className = "profileview">
            <div className="roundedCorners">
            <div className = "">User: {props.name}</div>
            <div className = "">Your bmi is {(props.health || "Not calculated")}</div>
            <div className = "">Your daily calorie goal is {(props.calories || 0).toFixed(0)} calories</div>
            <div className = "">Your current time plan is {(props.time || "not set")} weeks</div>
            <button className = "buttonback" onClick = {e => window.location.hash = "#welcome"}>Calculate</button>
            <button className = "buttonback" onClick = {e => window.location.hash = "#diet"}>Daily calorie intake</button>
            <button className = "buttonback" onClick = {e => {props.logout()}}>Log out</button>
            </div>
            </div>
        </div>
    )
}