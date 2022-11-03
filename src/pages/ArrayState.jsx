// import React, {useState} from 'react'


// const ArrayState = () => {
  
//     const [rectangleArray, setRectangleArray] = useState([])
  
//     const handleClick = () => {
//         setRectangleArray([])

//         const numberOfRect = randomInt(1, 20)
//         let i = 0;
//         if(i = 0, i < numberOfRect, i++){
//             setRectangleArray( [...rectangleArray,
//                 {
//                     background: getRandomColor(),
//                 }
            
//             ])
//             i++
//         }
//     }


//     function randomInt(min,max) {
//             return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
//         }
        
//     const getRandomColor = () => {
//             let letters = '0123456789ABCDEF';
//             let color = '#';
//             for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//             }
//             return color;
//         }

//     return (
//         <div>
//             <h2>Rectangle aléatoire  1 à 20 max  </h2>
//             <button onClick={handleClick}>Créer rectangle</button>

//             {
//                 rectangleArray.map((rect, i) => (
//                     <div key={i}
//                     style={{width: 200 + "px",
//                         height : 100 + "px",
//                         margin: '10px',}}
//                     >

//                     </div>
//                 ))
//             }
//         </div>
//   )
// }

// export default ArrayState


import React, {useState}from 'react'

const ArrayState = () => {

    const [rectangles, setRectangles] = useState([])

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 20 + 1)

        const arr = []
        for(let i = 0; i < randomNumber; i++){
            console.log(i);
            arr.push(getRandomColor()) // push dans le tableau arr une couleur aleatoire
        } // permettre de dire que tant que le nombre aleatoire est comprise entre 1 et 20, alors push le tableau arr dans setRectangles
        console.log(arr)
        setRectangles(arr)
    }


    const getRandomColor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


  return (
    <div>

        <h1>ArrayState</h1>

        <button onClick={handleClick}>Génerer entre 1 et 20 rectangles</button>

        {
            rectangles.map((rectangle, i) => (
                <div key={i} style={{width: "200px", height: "100px",margin: "2rem", background: rectangle}}> 
                </div>
            ))
        }
        
    </div>
  )
}
// background : rectangle permet via map((rectangle)) selectioner l'element du tableau ( seul la couleur aleatoir est entrée comme valeur dedans du coup) donc background prendra la couleur
export default ArrayState