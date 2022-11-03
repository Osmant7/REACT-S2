// import React, {useState} from 'react'
// import Nombre from '../components/LifeCycle/Nombre'

// const DevineLeNombre = () => {

//     const [inputNumber, setInputNumber] = useState('')
//     const [generateNewNumber, setGenerateNewNumber] = useState('')
    
    
//     const generateNumber = (min,max) => {
//         return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
//     } 

//         const handleSubmit = (e) => {
//             e.preventDefault()

//             console.log(generateNewNumber);
            
//             if(generateNewNumber === parseInt(inputNumber)){
//                 alert('GG !')
//                 setGenerateNewNumber('0')
//             }else if(generateNewNumber < parseInt(inputNumber)){
//                 alert('vous êtes au dessus ! attention')
//             }else if(generateNewNumber > parseInt(inputNumber)){
//                 alert('Vous êtes trop bas ! attention')
//             }
            
            
//         }

    

//   return (
//     <div>DevineLeNombre : 
          

//         <form onSubmit={handleSubmit}>
//             <input onChange={e => setInputNumber(e.target.value)} value={inputNumber} placeholder="Pari sur ton nombre" type="text"/>
//             <button type="submit">Lancer ton pari</button>
            
//         </form>
//             <button onClick={() =>{setGenerateNewNumber(generateNumber(1,100))}}>Générer</button>
       
//     </div>
//   )
// }

// export default DevineLeNombre

import React, {useState} from 'react'
import { useEffect } from 'react'

const DevineLeNombre = () => {

    const randomIntFromInterval = (min,max) => {
            return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
    }
    const [randomNumber, setRandomNumber] = useState(randomIntFromInterval(1,100))
    const [inputNumber, setInputNumber] = useState('')
    const [phrase, setPhrase] = useState('')
    const [score, setScore] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()

        const number = parseFloat(inputNumber)
        let phraseTemp = ""

        if(number < randomNumber){
            phraseTemp = "Le nombre à trouver est plus grand"
        } else if (number > randomNumber){
            phraseTemp = "Le nombre à trouver est plus petit"
        } else {
            phraseTemp = "Bravo vous avez gagné  ! en " + (score + 1) + " !"
        }

        setScore(score + 1)
        setPhrase(phraseTemp)
        setInputNumber('')
    }    

    // useEffect(() => {
    //     setRandomNumber(Math.random() * (max - min + 1) + min)
    // }, [])



  return (
    <div>
        <h1>Devine le nombre !</h1>

        <form onSubmit={handleSubmit}>
            <input onChange={e => setInputNumber(e.target.value)} value={inputNumber} type="number"/>
            <button type="submit">Jouer</button>
        </form>
        <h1>{phrase}</h1>
    </div>
  )
}

export default DevineLeNombre