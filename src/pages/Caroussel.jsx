import React, {useState, useEffect} from 'react'
import Thumbnails from '../components/Thumbnails/Thumbnails'
import View from '../components/Thumbnails/View'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import Lol1 from '../components/Thumbnails/Lol1.jpg'
import Lol2 from '../components/Thumbnails/Lol2.jpg'
import Lol3 from '../components/Thumbnails/Lol3.jpg'
import Lol4 from '../components/Thumbnails/Lol4.jpg'
import Lol5 from '../components/Thumbnails/Lol5.jpg'

const Caroussel = () => {


    const [imgArray, setImgArray] = useState([Lol1, Lol2, Lol3, Lol4, Lol5])
    const [clickedImg, setClickedImg] = useState([])

    // console.log(clickedImg[0]);
    // console.log(imgArray);

  return (
    <div>
        
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <FaArrowAltCircleLeft />
            <View clickedImg={clickedImg} />
            <FaArrowAltCircleRight />
        </div>

         {
            imgArray.map((image,i) => (

                    <Thumbnails key={i} image={image} imgArray={imgArray} clickedImg={clickedImg} setClickedImg={setClickedImg} />

            ))
        }
    </div>
  )
}

export default Caroussel