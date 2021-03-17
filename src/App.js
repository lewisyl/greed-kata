import React, { useState } from "react";
import Dice from "react-dice-roll";

function App() {
	const [finalPoints, setFinalPoints] = useState(0);
	let arr = [];

	// Solution of the Main Requirement is in this function:
	const getPoints = (arr) => {
		const result = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
		};
		for (let i = 0; i < 6; i++) {
			result[arr[i]]++;
		}
		let points = 0;

		for (let k = 0; k < 6; k++) {
			if (result[k] >= 3) {
				if (k === 1) {
					points += 1000;
				} else {
					points += k * 100;
				}
				result[k] -= 3;
				if (k === 1) {
					points += result[k] * 100;
				}
				if (k === 5) {
					points += result[k] * 50;
				}
			} else {
				if (k === 1) {
					points += result[k] * 100;
				}
				if (k === 5) {
					points += result[k] * 50;
				}
			}
		}
		setFinalPoints(points);
	};

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
		</div>
	);
}

export default App;
