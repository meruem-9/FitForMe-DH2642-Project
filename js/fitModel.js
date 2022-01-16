class fitModel{
    constructor(age, time = 0, goals = "maintain weight", weight, height, email = "default", gender = "male", observer = [], 
        calories = 0, kgTarget = 0, loseGain = -1, bmi = {bmi:0, health:"Not set"}, activityLevel = "level_1", name = "Default", pass = "Default"){
        this.gender = gender;
        this.name = name;
        this.observer = observer;
        this.age = age;
        this.pass = pass;
        this.kgTarget = kgTarget;
        this.email = email;
        this.loseGain = loseGain;
        this.goals = goals;
        this.weight = weight;
        this.time = time;
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
        this.observer.forEach(ob => {try{ob();}catch(error){console.log(error)}});
    }

    setName(name){
        this.name = name;
        this.notifyObservers();
    }

    setPass(pass){
        this.pass = pass;
        this.notifyObservers();
    }

    setEmail(email){
        this.email = email;
        this.notifyObservers();
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

    setTimeFrame(x){
        this.time = x;
        this.notifyObservers();
    }

    setKgTarget(x){
        this.kgTarget = x;
        this.notifyObservers();
    }

    setCalories(c){
        this.calories = c;
        this.notifyObservers();
    }

    setBmi(x){
        this.bmi = x;
        this.notifyObservers();
    }

    setLoseGain(x){
        this.loseGain = x;
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel});
        this.notifyObservers();
    }

    setActivityLevel(x){
        this.activityLevel = x;
        DietSource.searchCalories({height:this.height, weight:this.weight, age:this.age, gender:this.gender, activitylevel:this.activityLevel})
        this.notifyObservers();
    }

    logout(){
        this.bmi = {bmi:0, health:"Not set"};
        this.calories = 0;
        this.time = 0;
        window.location.hash = "#login";
    }
    

}
