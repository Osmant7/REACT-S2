// créer page TempConverter
// sur cette page intancier un composant "FormTemp" qui contiendra un formulaire avec 1 champ
// sur la page TempConverter instancier aussi un composant "DisplayTemp"
// Loorsque l'on valide le formulaire, nous devons afficher la convertion de la température saison en °C en °F


// import React, {useState} from 'react'
// import DisplayTemp from '../components/TempConverter/DisplayTemp'
// import FormTemp from '../components/TempConverter/FormTemp'

// const TempConverter = () => {

//     const [inputCelsius, setInputCelsius] = useState('')
//     const [celsiusArray, setCelsiusArray] = useState([])

//   return (
//     <div>
//         <h2>Celsius en Fahrenheit</h2>
//         <DisplayTemp celsiusArray={celsiusArray} setCelsiusArray={setCelsiusArray}/>
//         <FormTemp celsiusArray={celsiusArray} setCelsiusArray={setCelsiusArray} inputCelsius={inputCelsius} setInputCelsius={setInputCelsius} />
//     </div>
//   )
// }

// export default TempConverter

import React, {useState} from 'react'
import DisplayTemp from '../components/TempConverter/DisplayTemp'
import FormTemp from '../components/TempConverter/FormTemp'

const TempConverter = () => {

    const [temperature, setTemperature] = useState()

  return (
    <div>
        <DisplayTemp temperature={temperature} />
        <FormTemp  setTemperature={setTemperature} />
    </div>
  )
}

export default TempConverter