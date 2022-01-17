function DietPlanView(props){
    return( <div className = "background2">
        <div className = "dietplanview">
    
        <table class = "center1">
            <caption> Diet plan</caption>
        
            <tbody>
                <tr> <th scope="row">Breakfast:</th> <td> {(props.calories * 0.2).toFixed(0)} calories</td></tr>
                <tr> <th scope="row">Snack:</th>     <td> {(props.calories * 0.1).toFixed(0)} calories</td></tr>
                <tr> <th scope="row">Lunch:</th>     <td> {(props.calories * 0.3).toFixed(0)} calories</td></tr>
                <tr> <th scope="row">Snack:</th>     <td> {(props.calories * 0.1).toFixed(0)} calories</td></tr>
                <tr> <th scope="row">Dinner:</th>    <td> {(props.calories * 0.3).toFixed(0)} calories</td></tr>
            </tbody>
        </table>
        <div className = "buttondpv">
        </div>
        </div>
    </div>
    )
}