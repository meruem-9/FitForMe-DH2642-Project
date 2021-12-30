function RenderTest(){ console.log("Vue sub-component render test"); return false; }
const App = (props) =>
{     
defaultRoute();
window.addEventListener("hashchange", defaultRoute);
return  (
        <div>
            <Show hash = "#welcome">< WelcomePresenter model={props.model} /></Show>
            <Show hash = "#diet">< DietPlanPresenter model={props.model} /></Show>
            <Show hash = "#recept">< ReceptPresenter model={props.model} /></Show>
        </div>  
    );
}

function defaultRoute(){
    if(!["#welcome", "#diet", "#recept"].find(e => (window.location.hash == e)))
    window.location.hash = "#welcome";
}