var spaghettiFix = 0;
let loadingFromFirebase=false;

function persistModel(model){
    // boolean flag, used in a JS closure
	model.addObserver(function(){
        if(loadingFromFirebase == true){return;}
        console.log("hi2")
        firebase.database().ref(model.name).set({
        // object literal
       user: model.name,
       password: model.pass,
       email: model.email,
       calories: model.calories,
       bmi: model.bmi,
       timeFrame: model.time
   });
});
/*
 firebase.database().ref(model.name).on("value", function(data){
        console.log("getting data")
        loadingFromFirebase= true;
        try{if(data.val()){
            model.setCalories(data.val().calories);
            model.setName(data.val().user);
            model.setBmi(data.val().bmi);
        }}catch(e){console.log(e)}
        finally{loadingFromFirebase= false;}
    });
*/
}
function createAccount(model, name, pass, email){
    model.setName(name);
    model.setEmail(email);
    model.setPass(pass);
    window.location.hash = "#profile";
}

function logIn(model, name, pass){
    spaghettiFix = 1 
    getValues(model, name, pass)
}

function getValues(model, name, pass){
    loadingFromFirebase= true;
    firebase.database().ref(name).on("value", function(data){
        try{if(data.val() && data.val().password == pass && spaghettiFix == 1){
            console.log("hi");
            model.setCalories(data.val().calories);
            model.setName(data.val().user);
            model.setBmi(data.val().bmi);
            model.setTimeFrame(data.val().timeFrame);
            model.setPass(data.val().password);
            model.setEmail(data.val().email);
            console.trace();
            spaghettiFix = 0;
            window.location.hash = "#profile"
        }
        else{
            console.log("wrong pass or username");
            loadingFromFirebase = false;
        }}catch(e){console.log(e)}
        finally{loadingFromFirebase= false;}
    });
}
