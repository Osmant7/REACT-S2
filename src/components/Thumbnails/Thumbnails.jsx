import React, {useState, useEffect} from 'react'


const Thumbnails = ({imgArray, image, i, clickedImg, setClickedImg}) => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('oui');
        if(clickedImg.length > 0){
            setClickedImg('')
        }else{
            setClickedImg([...clickedImg, image])
        }
        // setClickedImg([...clickedImg, image])
        // console.log(clickedImg);
    }

  return (
    <div>
        <div style={{display:"flex", width:"500px"}}>
            <img onClick={handleClick} key={i} src={image} alt="" style={{width: "50px", height: "50px", margin:"2rem"}}/>
        </div>
    </div>
  )
}

{/* {
    imgArray.map((image,i) => (
        <img  onClick={handleClick} key={i} src={image} alt="" style={{width: "200px", height: "200px", margin:"2rem"}} />
    ))
} */}
export default Thumbnails