function ProfileView(props){
    return(
        <div className="center">
            <div>User: {props.name}</div>
            <div>Your bmi is {(props.health || "Not calculated")}</div>
            <div>Your daily calorie goal is {(props.calories || 0).toFixed(0)} calories</div>
            <div>Your current time plan is {(props.time || "not set")} weeks</div>
            <button onClick = {e => window.location.hash = "#welcome"}>Calculate</button>
            <button onClick = {e => window.location.hash = "#diet"}>Daily calorie intake</button>
        </div>
    )
}