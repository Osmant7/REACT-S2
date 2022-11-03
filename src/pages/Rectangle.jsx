// import React, {useState} from 'react'
// import './Rectangle.css'

// const Rectangle = () => {

//     const [rect, setRect] = useState(0)
//     const [rectcopie, setRectcopie] = useState([0   ])

//     const handleClick = (index) => {
//         setRect( rect + 1 );
//         setRectcopie([...rectcopie, rect + 1])
//     }
    
//     const getRandomColor = () => {
//         let letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
    

//   return (
//     <div>Rectangle : 
//         <button onClick={handleClick}> Générer un rectangle </button>

//         {
//             rectcopie.map((value,index) => {
//                 return (
//                     <div key={index} className={"rectangleStyle"} style={{backgroundColor : getRandomColor() }}>
//                         {value}
//                     </div>
//                 )
//             })
//         }

//     </div>
//   )
// }

// export default Rectangle

import React, {useState} from 'react'


const Rectangle = () => {
  
    const [rectangles, setRectangles] = useState([])

    const handleClick = () => {
        setRectangles([...rectangles, {
            width:  randomIntFromInterval(100, 200),
            height:  randomIntFromInterval(100, 200),
            background: getRandomColor(),
        }])
    }


        function randomIntFromInterval(min,max) {
            return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
        }

        const getRandomColor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        const handleClickDelete = (index) => {
            const oldState = [...rectangles]
            oldState.splice(index, 1)
            setRectangles(oldState)
        }
  
    return (

    <div className="homePage">
        <h1>Rectangles</h1>
        <button onClick={handleClick}> Ajouter un rectangle </button>

        {
            rectangles.map((rectangle,i) => (
                <div
                    key={i}
                    style={{
                        background: rectangle.background,
                        width: rectangle.width + "px",
                        height : rectangle.height + "px",
                        margin: '10px',
                    }}
                >
                    <button onClick={() => {handleClickDelete(i)}}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Rectangle