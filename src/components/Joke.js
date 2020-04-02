import React from 'react';

function Joke(props){
    console.log(props)
    if (props.question == null ){
        return(
            <div>
            
            <p>punchline: {props.punchline}</p>
            </div>
        )
    }
    else {
    return(
        <div>
        <h2>question: {props.question}</h2>
        <p>punchline: {props.punchline}</p>
        </div>
    )}
}

export default Joke