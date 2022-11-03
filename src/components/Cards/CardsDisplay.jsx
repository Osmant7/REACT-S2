import React, {useEffect} from 'react'

const CardsDisplay = ({cardsData, allCards, setAllCards}) => {

    useEffect(() => {
        setAllCards([...allCards, cardsData])
    }, [])
    // const turnCard = (e) => {
    //     e.preventDefault()

    //     cardsData.sort()

    //     console.log('Cliqué');
        
    // }


    // const mix = (e) => {
    // e.preventDefault()
    //     setAllCards([...allCards, cardsData])
    // }

  return (
      <div style={{display:"flex", flexwrap: "wrap"}}>
        {/* {
            cardsData.map((card, i) => (
                <div style={{width: "80px", height: "80px", margin:"2rem", backgroundColor: "red", color: "blue"}}>
                    
                        <p key={i}>{card.value}
                        
                        </p>
                    
                </div>
            ))
        } */}
    </div>
  )
}

export default CardsDisplay