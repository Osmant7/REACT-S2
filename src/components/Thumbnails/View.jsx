import React from 'react'
import Lol1 from './Lol1.jpg'
import Lol2 from './Lol2.jpg'
import Lol3 from './Lol3.jpg'
import Lol4 from './Lol4.jpg'
import Lol5 from './Lol5.jpg'


const View = ({clickedImg}) => {



  return (
    <div>
        <img style={{width:"500px", height:"300px"}} src={clickedImg} alt="" />
    </div>
  )
}

export default View