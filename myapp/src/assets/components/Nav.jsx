
//import "./App.css";
import Promo from "./Promo";
import Intro1 from "./Intro1";
import Main from "./Main";
import Intro2 from "./Intro2";
import About from "./About";
//import Image from "./Image";
function sum(a,b){
return a+b;
}

function Nav(){
    const photo="./pngegg (13).png";
const Sum=()=>{
    return console.log('This is a click');}
return(
    <div >
    <nav>
        <ul className="main-nav">
            <li>Home</li>
            <li>About</li>
            <li>Log In</li>
            <li>Help</li>
        </ul>
    </nav>
    
    <Intro1 />
    <Promo title="This is what props can do"/>
    <Main name="Johana Kihiu" color={<Intro2 about={<About/>}/>}/>
    <Main name={<h2>Any other person other than the named above <Promo/>{sum(34,43)}</h2>}/>
    
    <img src={photo} alt="Img"></img>
    <button onClick={Sum}>Click test</button>
    </div>
);
}
export default Nav;