import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {
	GlobalStyle,
	AppWrapper,
	CurrencyConverter,
	CurrencyInfo,
	Input,
	Loading,
	Form,
	Button,
} from "../styles";

import { Select } from "../Select";

import {getRate} from "../../store/actions/currencyActions";

function Currency() {
const dispatch = useDispatch();
const [rate, setrates] = useState([]);
const [text1, settext1] = useState(1)
const [text2, settext2] = useState(1);
const [value1, setvalue1] = useState()
const [value2, setvalue2] = useState();
const currency = useSelector((state) => state.currency);
const { data, isFetched } = currency;
const { rates } = data;
// console.log(rate);

useEffect(() => {
	dispatch(getRate());
	if (isFetched) {
		setrates(rates);
	}
}, [dispatch, rates, isFetched]);

const currencyList = rate;
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("value1"+value1);
  console.log("value2"+value2);
  let num = (value2/value1)*text1
  settext2(num)
}
  return (
		<Form onSubmit={handleSubmit}>
			<GlobalStyle />
			{!isFetched && <Loading>Loading...</Loading>}
			{isFetched && (
				<AppWrapper>
					<CurrencyInfo></CurrencyInfo>

					<CurrencyConverter>
						<Input
							type='number'
							value={text1 || ""}
							onChange={(e) => settext1(e.target.value)}
						/>

						<Select
							value={value1 || ""}
							currencyList={currencyList}
							onChange={(e) => setvalue1(e.target.value)}
						/>
					</CurrencyConverter>
					<CurrencyConverter>
						<Input
							type='number'
							value={text2 || ""}
							onChange={(e) => settext2(e.target.value)}
						/>

						<Select
							value={value2 || ""}
							currencyList={currencyList}
							onChange={(e) => setvalue2(e.target.value)}
						/>
					</CurrencyConverter>
					<Button>Convert</Button>
				</AppWrapper>
			)}
		</Form>
	);
}
 export default Currency;