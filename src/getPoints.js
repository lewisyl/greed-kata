const getPoints = (props) => {
	const result = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	};
	for (let i = 0; i < 6; i++) {
		result[props.arr[i]]++;
	}
	let points = 0;

	for (let k = 1; k < 7; k++) {
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
	return points;
};

export default getPoints;
