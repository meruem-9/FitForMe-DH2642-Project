function promiseNoData(promise, data, error){
    if(!promise && !data && !error)
        return <span>0</span>;
    if(promise && !data && !error)
        return (<img src = "http://www.csc.kth.se/~cristi/loading.gif" ></img>)
    if(promise && !data && error)
        return (new Error(" why error why "));
    return false;
}