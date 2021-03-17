import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

function App() {
	const rollDoneCallback = (num) => {
		console.log(`You rolled a ${num}`);
	};

	const rollAll = () => {
		ReactDice.rollAll(5);
	};

	return (
		<>
			<ReactDice numDice={5} rollTime={1} rollDone={rollDoneCallback} />
			<button onClick={rollAll}>Roll All</button>
		</>
	);
}

export default App;
