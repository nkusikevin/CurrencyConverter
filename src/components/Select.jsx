import React from "react";

import { SelectCurrency } from "./styles";

export const Select = ({ value, onChange, currencyList }) => (
	<SelectCurrency value={value} onChange={onChange} name='currencyList'>
		{Object.keys(currencyList).map((currency) => (
			<option key={currency} value={currencyList[currency]}>
				{currency}
			</option>
		))}
	</SelectCurrency>
);
