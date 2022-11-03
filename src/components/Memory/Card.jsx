
import React from "react"
import "./Card.css"

const Card = ({ card, setClickedCards, clickedCards }) => {
	const handleClick = () => {
		if (!card.display) {
			if (clickedCards.length < 2) {
				if (clickedCards.length === 1) {
					if (clickedCards[0].id === card.id) return
				}

				setClickedCards([...clickedCards, card])
			}
		}
	}

	return (
		<div className="memoryCard" onClick={handleClick}>
			{card.display && card.value}
		</div>
	)
}

export default Card