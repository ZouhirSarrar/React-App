import React from 'react';

function Joke(props){
    console.log(props)
    return(
        <div>
        <h2>question: {props.joke.question}</h2>
        <p>punchline: {props.joke.punchline}</p>
        </div>
    )
}

export default Joke