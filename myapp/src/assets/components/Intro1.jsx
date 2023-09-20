function Intro1() {
    const name=(fname,lname)=>{
        return fname+" "+lname;
    }
    const results="Index 30556105001";
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
                
            </div>
            <h5 style={{color:"tomato"}}>{name("Jane","Mwangi")}</h5>
            <p style={{color:"tomato"}}>{results}</p>
            
            <h1 style={{color:"tomato"}}>{Math.floor(Math.random()*10)+1}This is a random number</h1>
        </div>
    );
};

export default Intro1;