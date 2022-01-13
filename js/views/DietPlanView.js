function DietPlanView(props){
    return( <div>
    <div>Diet plan</div>
        <table>
            <tbody>
                <tr><td>Breakfast {(props.calories * 0.2).toFixed(0)} calories</td></tr>
                <tr><td>Snack {(props.calories * 0.1).toFixed(0)} calories</td></tr>
                <tr><td>Lunch {(props.calories * 0.3).toFixed(0)} calories</td></tr>
                <tr><td>Snack {(props.calories * 0.1).toFixed(0)} calories</td></tr>
                <tr><td>Dinner {(props.calories * 0.3).toFixed(0)} calories</td></tr>
            </tbody>
        </table>
    <button onClick = {e => {window.location.hash = "#profile"}}>Back</button>
    </div>
    )
}