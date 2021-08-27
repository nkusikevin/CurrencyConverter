import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav"
import Currency from "./components/containers/Currency";
import HistoryRates from "./components/containers/HistoryRates";
import LatestRates from "./components/containers/LatestRates";
import { BrowserRouter, Route} from "react-router-dom";

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Nav />
			<Route path='/' component={LatestRates} exact />
			<Route path='/LatestRates' component={LatestRates} exact />
			<Route path='/Convert' component={Currency} exact />
			<Route path='/HistoryRates' component={HistoryRates} exact />
		</BrowserRouter>
	</Provider>
);

export default App;
