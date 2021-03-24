import React, { useState } from "react";
import Dice from "react-dice-roll";
import getAllPoints from "./getPoints";

function App() {
	const [finalPoints, setFinalPoints] = useState(0);
	const [totalPoints, setTotalPoints] = useState(0);

	let arr = [];

	// Solution of the Main Requirement is in this function:
	const getPoints = (arr) => {
		let points = getAllPoints({ arr });
		setTotalPoints((p) => p + points);
		setFinalPoints(points);
	};

	// console.log(getPoints([6, 6, 6, 6, 6, 6]));

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Press Enter on your keyboard to Roll All</h1>
			<div>
				<Dice
					onRoll={(value) => {
						arr[0] = value;
					}}
					size={100}
					triggers={["Enter"]}
				/>
				<Dice
					onRoll={(value) => {
						arr[1] = value;
					}}
					size={100}
					triggers={["Enter"]}
				/>
				<Dice
					onRoll={(value) => {
						arr[2] = value;
					}}
					size={100}
					triggers={["Enter"]}
				/>
				<Dice
					onRoll={(value) => {
						arr[3] = value;
					}}
					size={100}
					triggers={["Enter"]}
				/>
				<Dice
					onRoll={(value) => {
						arr[4] = value;
						getPoints(arr);
					}}
					size={100}
					triggers={["Enter"]}
				/>
			</div>
			<h3>You final points: {finalPoints}</h3>
			<h3>Total Points: {totalPoints}</h3>
		</div>
	);
}

export default App;
