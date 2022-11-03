import React, {useState} from 'react'
import Form from '../components/ShareState/Form'

const ShareState = () => {

    const [inputTask, setInputTask] = useState("")


  return (

    <div>
        <h1>Remonté de l'état</h1>
        <h2>{inputTask}</h2>

        
       <Form inputTask={inputTask} setInputTask={setInputTask}/>
    </div>
  )
}
// pour communiquer a l'enfant, l'inputTask et le setInputTask on les envoies dans la balise Form />

export default ShareState