import React, {useState} from 'react'

const Form = () => {

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputName, inputAge);
        setInputName('')
        setInputAge('')
    }

    // const handleChangeName = (e) => {
    //     setInputName(e.target.value);
    // }

  return (
    <div>
        <h1>Formulaire</h1>
        <h2>{inputName}</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="nom" onChange={e => setInputName(e.target.value)} value={inputName} type="text" />
            <input placeholder="age" onChange={e => setInputAge(e.target.value)} value={inputAge} type="number" />
            <button type="submit">Valider</button>
        </form>

    </div>
  )
}

// quand on ecoute levenement de la soumission d'un formulaire ( onsubmit par exemple) ca se soumet quand on soumet le formulaire et non au click d'un boutton
export default Form