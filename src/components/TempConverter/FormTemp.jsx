// import React from 'react'

// const FormTemp = ({inputCelsius, setInputCelsius, celsiusArray, setCelsiusArray}) => {

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setCelsiusArray([...celsiusArray, inputCelsius])
//         console.log(inputCelsius);
//         setInputCelsius('')
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input onChange={(e) => setInputCelsius(e.target.value)} value={inputCelsius} type="text"/>
//             <button type="Submit">Valider</button>
//         </form>
//     </div>
//   )
// }

// export default FormTemp

import React, {useState} from 'react'

const FormTemp = ({setTemperature}) => {
    const [inputTemp, setInputTemp] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    setTemperature(parseFloat(inputTemp))

     }

  return (
    <div>
         <form onSubmit={handleSubmit}>
           <input onChange={(e) => setInputTemp(e.target.value)} value={inputTemp} type="text"/>
           <button type="Submit">Valider</button>
        </form>
    </div>
  )
}

export default FormTemp