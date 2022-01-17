function ProfileView(props){
    return(
        <div className = "background">
           <div className = "profileview">
            <div className="roundedCorners">
            <div className = "">User: {props.name}</div>
            <div className = "">Your bmi is {(props.health || "Not calculated")}</div>
            <div className = "">Your daily calorie goal is {(props.calories || 0).toFixed(0)} calories</div>
            <div className = "">Your current time plan is {(props.time || "not set")} weeks</div>
            </div>
            </div>
        </div>
    )
}