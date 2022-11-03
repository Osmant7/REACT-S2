import React, { useEffect, useState } from "react"
import { cardsData } from "../fakeDatas/memory"
import { shuffle } from "../utils/array"
import Card from "../components/Memory/Card"

import "./Memory.css"

const Memory = () => {
	const [cards, setCards] = useState(shuffle([...cardsData]))
	const [clickedCards, setClickedCards] = useState([])
	const [pairFound, setPairFound] = useState(0)
	const [score, setScore] = useState(0)

	useEffect(() => {
		if (clickedCards.length > 0) {
			const cardsUpdate = [...cards]
			let indexOfElem = cards.indexOf(clickedCards[clickedCards.length - 1])
			cardsUpdate[indexOfElem].display = true
			setCards(cardsUpdate)
		}

		if (clickedCards.length > 1) {
			setScore(score + 1)
			if (clickedCards[0].value === clickedCards[1].value) {
				setClickedCards([])
				setPairFound(pairFound + 1)
			} else {
				setTimeout(() => {
					const cardsUpdate = [...cards]
					let indexOfElem1 = cards.indexOf(clickedCards[0])
					let indexOfElem2 = cards.indexOf(clickedCards[1])

					cardsUpdate[indexOfElem1].display = false
					cardsUpdate[indexOfElem2].display = false

					setCards(cardsUpdate)
					setClickedCards([])
				}, 1000)
			}
		}
	}, [clickedCards])

	useEffect(() => {
		if (pairFound === 8) {
			console.log("Victoire ! Score : " + score)
		}
	}, [pairFound])

	return (
		<div className="memoryPage">
			<h1>Memory</h1>

			<div className="board">
				{cards.map((card) => (
					<Card key={card.id} card={card} clickedCards={clickedCards} setClickedCards={setClickedCards} />
				))}
			</div>
		</div>
	)
}

export default Memory