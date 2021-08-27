import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "../styles";
function HistoryRates() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [data, setdata] = useState();
	var today = new Date();
	var date = "";
	if (selectedDate === null) {
		date = moment(today).format("yyyy-MM-DD");
	} else {
		date = moment(selectedDate).format("yyyy-MM-DD");
	}
	// const fetchData = async () => {};
	useEffect(() => {
		axios
			.get(
				`http://data.fixer.io/api/${date}?access_key=7be9ecd39c520e2cd5c5fad627913de2& base = GBP& symbols = USD,CAD,EUR`
			)
			.then((results) => {
				setdata(results.data.rates);
				console.log(results);
				console.log("date:"+date);
			});
	}, [date]);

	console.log(selectedDate);
	console.log(date);

	return (
		<>
			<div style={{ padding: "2rem", textAlign: "center" }}>
				<DatePicker
					selected={selectedDate}
					onChange={(date) => setSelectedDate(date)}
					dateFromat='YYYY-MM-dd'
					placeholderText={"yyyy-mm-dd"}
					// minDate={new Date()}
					// maxDate={new Date()}
					filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
					showYearDropdown
					scrollableYearDropdown
				/>
			</div>
			{/* {Object.keys(data).map((key) => (
				<Card>
					{key} - {data[key]}
				</Card>
			))} */}
		</>
	);
}

export default HistoryRates;
