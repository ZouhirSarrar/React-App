import React from 'react';
import Joke from './components/Joke'

function App(){
  return(
    <div>
      <Joke joke ={{ question:"what is aspergers ?",punchline:"burgers in the ass"}}/>
      <Joke joke ={{ question:"what is hey ?",punchline:"burgers "}}/>
      <Joke joke ={{ question:"what is azaz ?",punchline:"aaaaa"}}/>
      <Joke joke ={{ question:"what is a door ?",punchline:"door knob"}}/>
      <Joke joke ={{ question:"what is aspergers ?",punchline:"fuck you cartman"}}/>

    </div>
  )
}

export default  App