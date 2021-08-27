import { LATEST_RE,LATEST_SUCCESS,LASTEST_FAIL} from "../actions/types";

export default function (state, { type, payload }) {
	switch (type) {
		case LATEST_RE:
			return {
			loading:true,
			};
		case LATEST_SUCCESS:
			return {
					...state,
				data: payload,
				isFetched: true,
			};
		case LASTEST_FAIL:
			return {
				...state,
				error: payload,
			};
		default:
			return state || {};
	}
}
