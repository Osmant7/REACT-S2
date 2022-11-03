import React, {useState} from 'react'

const Form = ({inputTask, setInputTask}) => {


    const handleSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input onChange={(e) => setInputTask(e.target.value)} value={inputTask} type="text"/>
            <button type="submit">Valider</button>
        </form>
    </div>
  )
}

// et ici on récupere ce que le parent a envoyé, dans les props
export default Form