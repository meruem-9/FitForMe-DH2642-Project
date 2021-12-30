function calculateBMI(height, weight){
    if((height === '') || (height < 0) || (isNaN(height)) && (weight === '') || (weight < 0) || (isNaN(weight))){
        return "Please enter valid height and weight"
    }
    if((height === '') || (height < 0) || (isNaN(height))){
        return "Please enter valid height"
    }
    if((weight === '') || (weight < 0) || (isNaN(weight))){
        return "Please enter valid weight"
    }
    return "API CALL"
}