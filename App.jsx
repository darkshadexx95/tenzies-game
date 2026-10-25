import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
	/**
	 * Challenge: Update the array of numbers in state to be
	 * an array of objects instead. Each object should look like:
	 * { value: <random number>, isHeld: false }
	 *
	 * Making this change will break parts of our code, so make
	 * sure to update things so we're back to a working state
	 */
	const [dice, setDice] = React.useState(generateAllNewDice());

	function generateAllNewDice() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}
	console.log(generateAllNewDice());

	function hold(id) {
		console.log(id);
	}

	const diceElements = dice.map((die) => <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} />);

	function rollDice() {
		setDice(generateAllNewDice());
	}

	return (
		<main className="main">
			<section className="dice-container">{diceElements}</section>
			<button className="roll-dice" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}
