import React, { useState, useEffect } from "react";
import axios from "axios";
import{Card} from '../styles'
function LatestRates() {
	const [rate, setrates] = useState("");
	var arr = [];
	const fetchData = async () => {
		const results  = await axios.get(
			"http://data.fixer.io/api/latest?access_key=7be9ecd39c520e2cd5c5fad627913de2"
		);
		setrates(results.data.rates);
	};

	useEffect(() => {
		fetchData();
	}, []);
	Object.keys(rate).forEach(function (key) {
		arr.push(rate[key]);
	});
	return (
		<>
			<h1>Latest Rates</h1>
			{Object.keys(rate).map((keyer) => (
				<Card key={keyer}>
					{keyer} - {rate[keyer]}
				</Card>
			))}
		</>
	);
}

export default LatestRates;
