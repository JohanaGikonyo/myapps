function Main(props){
    [10,20,30].forEach(item=>item*10);
    return(
<aside style={{color:"tomato", fontSize:"8px", lineHeight:"2px", marginLeft:"10px", width:"calc(30%-3px)", float:"left"} }>
    <h1>Hello,</h1> {props.name},{props.color}
    {
    //const results=<h1>This is Awesome</h1>
  }
</aside>


    )
}
export default Main;