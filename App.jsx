import React from 'react';
import Die from './Die';

export default function App() {
	const [dice, setDice] = React.useState(generateAllNewDice());

	function generateAllNewDice() {
		return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
	}
	console.log(generateAllNewDice());

	const diceElements = dice.map((die, i) => <Die key={`die--${i}`} value={die} />);

	function rollDice() {
		setDice(generateAllNewDice());
	}

	return (
		<main className="main">
			<section className="dice-container">{diceElements}</section>
			<button className="roll-button" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}
