const  fitSource = {   // JS object creation literal
    apiCall(params) {
        
    return fetch( params, {
             "method": "GET",              // HTTP method
             "headers": {                  // HTTP headers
                'X-rapidapi-Key' : "a27c75da42mshd9e0be3a39905ebp16240bjsnb11122c7bc75",
                "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
        }
        })
        .then(response=>{ if(response.ok){return response}{throw response.statusText}} )
           // from HTTP response headers to HTTP response data
        .then(response => response.json());
    }
    ,   // comma between object entries

    /* Searches for dishes of given type, example params object:
     *{type:"main course", query:"chicken"}
     *  */
    searchCalories(params){ return fitSource.apiCall("dailyCalorie?"+new URLSearchParams(params)).then(data => {return data.results});}

    ,   

    getFoodDetails(id){ return fitSource.apiCall("foodids/" + id + "/information").then(data=>{return data}); 
     /* Returns detailed information of the dish with given id */
    }}