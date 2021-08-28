import { LATEST_SUCCESS, LATEST_FAIL } from "../actions/types";


export default function(state, { type, payload }) {
  switch (type) {
		case LATEST_SUCCESS:
			return {
				...state,
				data: payload,
				isFetched: true,
			};

		case LATEST_FAIL:
			return {
				...state,
				error: payload,
			};
		default:
			return state || {};
	}
}
