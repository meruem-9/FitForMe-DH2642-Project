const DietSource ={
    apiCall(params){
    return fetch("https://fitness-calculator.p.rapidapi.com/" + params, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "a27c75da42mshd9e0be3a39905ebp16240bjsnb11122c7bc75"
        }
    }).then(response=>{if(response.status != 200) throw new Error(response.statusText);
    return response;}).then(response => response.json())}
,
async searchBMI(params){
    if(!(params.height > 0)||!(params.weight > 0) || !(params.age > 0)) 
        return;
    const data = await DietSource.apiCall("bmi?" + new URLSearchParams(params)).then(result => result.data);
    myModel.setBmi(data);
}
,
async searchCalories(params){
    if(!(params.height > 0)||!(params.weight > 0) || !(params.age > 0)) 
        return;
    const data = await DietSource.apiCall("dailycalorie?" + new URLSearchParams(params)).then(result => result.data);
    myModel.setCalories(checkGoals(data));
}
}

function checkGoals(c){
    if(myModel.goals == "maintain weight")
        return c.goals["maintain weight"]
    else{
        return  c.goals[myModel.goals].calory
    }
}