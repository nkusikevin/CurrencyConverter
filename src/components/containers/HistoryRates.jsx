import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
// import { Card } from "../styles";
function HistoryRates() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [hData ,setHdata] = useState(null);
	var today = new Date();
	var date = "";
	if (selectedDate === null) {
		date = moment(today).format("yyyy-MM-DD");
	} else {
		date = moment(selectedDate).format("yyyy-MM-DD");
	}
	// eslint-disable-next-line
	const fetchData = async (date) => {
		const results = await axios.get(
			`http://data.fixer.io/api/${date}?access_key=7be9ecd39c520e2cd5c5fad627913de2& base = GBP& symbols = USD,CAD,EUR`
			);
			console.log(results.data);
			const datas = JSON.stringify(results.data.rates);
			
			setHdata(datas);
			
		};
		useEffect(() => {
			fetchData(date);
		}, [date]);

	return (
		<>
			<div style={{ padding: "2rem", textAlign: "center" }}>
				<DatePicker
					selected={selectedDate}
					onChange={(date) => setSelectedDate(date)}
					dateFromat='YYYY-MM-dd'
					placeholderText={"yyyy-mm-dd"}
					filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
					showYearDropdown
					scrollableYearDropdown
				/>
			</div>
			{hData ? undefined : <h1>Unable to fetch data now</h1>}
		
			{/* {Object.keys(hData).map((key) => (
			<Card>
				{key} - {hData[key]}
			</Card>
			))} */}
		</>
	);
}

export default HistoryRates;
