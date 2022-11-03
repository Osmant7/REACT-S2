// import React from 'react'

// const DisplayTemp = ({celsiusArray}) => {

//   return (
//     <div>
//         <h2>    
//             {
//                 celsiusArray.map((cel, i) => (
//                     <h3 key={i}>{cel * 9/5 + 32} </h3>
//                 ))
//             }
//         </h2>
//     </div>
//   )
// }

// export default DisplayTemp

import React from 'react'

const DisplayTemp = ({temperature}) => {

  return (
    <div>
       {temperature * 9/5 + 32}
    </div>
  )
}

export default DisplayTemp