import React, { useState, useEffect} from 'react'

const Nombre = ({number}) => {

    useEffect(() => {
        // console.log(number);
        // randomIntFromInterval = (min,max) => {
        //     return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
        // }

        if(number){
            console.log(number);
        }
    }, [])


  return (
    <div>
        <h2 style={{visibility: 'hidden'}}>{number}</h2>
    </div>
  )
}

export default Nombre