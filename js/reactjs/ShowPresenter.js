function Show(props){
    const[hashState, setHashState] = React.useState(window.location.hash)
    React.useEffect( function(){
        function eventList(){setHashState(window.location.hash)}
        window.addEventListener("hashchange", eventList);                               // 1. subscribe
        return function(){window.removeEventListener("hashchange", eventList)}        // 2.unsubscribe
        }, [])
        return<div class={hashState === props.hash ? "" : "hidden"}>{props.children}</div>

}