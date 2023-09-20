const age=22+" years old";
function Hallo(props){
    return(
        <div>
        <h2>I am {age}</h2>
        <h5>{props.info}</h5>
        </div>
    )
}

function Intro2(props) {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...<Hallo info="I am a software developer, and I like coding"/>

                <br/> This is my actual age:{age}</p>
            </div>
            <h3>{props.about}</h3>
        </div>
    );
};

export default Intro2;