

function HeaderView (props){
return (

<header className="header">
    <nav className="nav">
    <span><button className="button-49" onClick = {e =>  window.location.hash = "#profile"}>Home</button></span>
    <span><button className="button-49" onClick = {e =>  window.location.hash = "#welcome"}>Your Values</button></span>
    <span><button className="button-49" onClick = {e =>  window.location.hash = "#diet"}>Diet</button></span>
        
        <button className="button-49" onClick = {e => {props.logout()}}>Log out</button>
    </nav>
</header>
    
);
}
