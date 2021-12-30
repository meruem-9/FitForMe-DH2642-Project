function eventPrinter(evt){
    console.log(evt);
}
function welcomeResultsView(props){

return (
<div>
        {props.searchResults.map((data)=> (
            <span className="searchResult" onClick={e=>{props.dishChosen(data.id);window.location.hash="#details"}} >
                <img className="textbox" src={"" + data.image}></img> /*add source later*/
                <div className= "imgTitle"> {data.title}</div>
                
        </span>))}

        </div>);
}