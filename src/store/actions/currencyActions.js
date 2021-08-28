import axios from "axios";
import fs from "fs"
import { LATEST_SUCCESS, LATEST_FAIL } from "./types";

const handleError = (payload) => ({
	type: LATEST_FAIL,
	payload,
});

export function getRateRequest() {
	// Node API KEY
	const API = process.env.REACT_APP_API_SECERET;
	const url = `http://data.fixer.io/api/latest?access_key=${API}`;
	return axios.get(url);
}

export const getRate = () => async (dispatch) => {
	try {
		const {data} = await getRateRequest();
		// setTimeout(() => {}, 2000);
		dispatch({
			type: LATEST_SUCCESS,
			payload: data,
		});
		fs.writeFile("data.json", data, "utf8", (err) => {
			if (err) throw err;
		});

	} catch (error) {
		dispatch(handleError(error));
	}
};
