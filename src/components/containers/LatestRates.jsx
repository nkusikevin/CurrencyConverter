import React, { useState, useEffect } from "react";
import {useDispatch ,useSelector} from "react-redux"
import{Card} from '../styles'
import { getRate } from "../../store/actions/currencyActions";
function LatestRates() {
	const dispatch = useDispatch();
	const [rate, setrates] = useState([]);
	const currency = useSelector((state) => state.currency);
	const { data, isFetched } = currency;
	const { rates } = data;
	// console.log(rate);
	
	useEffect(() => {
		dispatch(getRate());
		if (isFetched) {
			setrates(rates);
			
		}
	}, [dispatch ,isFetched, rates]);

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
