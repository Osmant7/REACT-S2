// import React, {useState} from 'react'

// const FormExercice2 = () => {

//     const [colorsRectangle, setColorsRectangle] =  useState('')
//     const [numbersRectangle, setNumbersRectangle] = useState('')
//     const [rect, setRect] = useState([])

//     const handleSubmit = (e) => {
//         e.preventDefault()

        
        
//         setRect([...rect, colorsRectangle])

//         const num = numbersRectangle
//         // for(let i = 0; i = num; i++){
//         // }

//         console.log(rect);
//         setColorsRectangle('')
//         setNumbersRectangle('')
//         // setRect([...rect], colors + numbers)
//     }


//   return (
//     <div>
//         <form onSubmit={handleSubmit}>

//             <input type="color" onChange={e => setColorsRectangle(e.target.value)} value={colorsRectangle}/>
//             <input type="text" onChange={e => setNumbersRectangle(e.target.value)} value={numbersRectangle}/>
//             <button type="submit">Ajouter autant de rectangle que de nombre</button>

//         </form>

//         <ul>
//             {
//                 rect.map((rec, i) => (
//                     <li key={i} style={{width: 200 +"px", height: 150 +"px"}}>{rec}  <button onClick={() => handleClickDelete(i)}>DELETE</button></li>
//                 ))
//             }
//         </ul>
//     </div>
//   )
// }

// export default FormExercice2


// faire apparaitre autant de rectangle que de number, donc 2 input ( color pour le backgroundcolor) et (number pour le nombre de rectangle)

import React, {useState} from 'react'

const FormExercice2 = () => {

    const [inputColor, setInputColor] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    const [rectangles, setRectangles] = useState([])

     const handleSubmit = e => {
        e.preventDefault()
        const arr = [...rectangles]   // ici afin de ne pas supprimer les anciennes données du tableau quand on submit plusieurs fois le formulaire
        for(let i = 0; i < parseFloat(inputNumber); i++){    // parseFloat pour mettre en type number
            arr.push(inputColor)
        }
        console.log(arr);
        setRectangles(arr)
    }

  return (

    <div>
        <form onSubmit={handleSubmit}>

        <input type="color" onChange={e => setInputColor(e.target.value)} value={inputColor} placeholder="color"/>
        <input type="number" onChange={e => setInputNumber(e.target.value)} value={inputNumber} placeholder="number"/>
        <button type="submit">Ajouter autant de rectangle que de nombre</button>

        </form>

        {
            rectangles.map((rectangle, i) => (
                <div key={i} style={{width:"200px", height:"150px", background:rectangle, margin:"1rem"}}></div> 
            ))
        }

    </div>
  )
}

export default FormExercice2