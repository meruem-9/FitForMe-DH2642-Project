class fitModel{
    constructor(age, goals = "maintain weight", weight, height, gender = "male", observer = [], 
        calories = 0, bmi = {bmi:0, health:""}, activityLevel = "level_1",){
        this.gender = gender;
        this.observer = observer;
        this.age = age;
        this.goals = goals;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.calories = calories;
        this.bmi = bmi;
        this.activityLevel = activityLevel;
    }
    addObserver(obs){
        this.observer = [...this.observer, obs];
    }

    removeObserver(x){
        this.observer = [...this.observer.filter(function(obs){return obs !== x})];
    }

    notifyObservers(){
        this.observer.forEach(ob => {try{ob()}catch(error){console.log(error)}});
    }

    setAge(a){
        this.age = a;
        DietSource.searchBMI({age:this.age, weight:this.weight, height:this.height});
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    setWeight(w){
        this.weight = w;
        DietSource.searchBMI({age:this.age, weight:this.weight, height:this.height});
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    setHeight(h){
        this.height = h;
        DietSource.searchBMI({age:this.age, weight:this.weight, height:this.height});
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    setGender(g){
        this.gender = g;
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    setGoals(goals){
        this.goals = goals;
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    setCalories(c){
        this.calories = checkGoals(c);
        this.notifyObservers();
    }

    setBmi(x){
        this.bmi = x;
        this.notifyObservers();
    }

    setActivityLevel(x){
        this.activityLevel = x;
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

}

function checkGoals(c){
    if(myModel.goals == "maintain weight")
        return c.goals["maintain weight"]
    else{
        return  c.goals[myModel.goals].calory
    }
}