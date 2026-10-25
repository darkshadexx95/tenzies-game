import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
	const [dice, setDice] = React.useState(generateAllNewDice());

	function generateRandomNumber() {
		return Math.ceil(Math.random() * 6);
	}

	function generateAllNewDice() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: generateRandomNumber(),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}

	function hold(id) {
		console.log(id);

		setDice((prevDice) => prevDice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
	}

	const diceElements = dice.map((die) => <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} />);

	function rollDice() {
		setDice((prevDice) => prevDice.map((die) => (die.isHeld ? die : { ...die, value: generateRandomNumber() })));
	}

	return (
		<main className="main">
			<h1 className="title">Tenzies</h1>
			<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			<section className="dice-container">{diceElements}</section>
			<button className="roll-dice" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}
