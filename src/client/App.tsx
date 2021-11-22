import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Admin from "./components/Admin";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<div className="container">
			<h1>Full Stack Blog Application</h1>
			<BrowserRouter>
				<Switch>
					<Route path={"/admin/:blogid"} component={Admin} />
					<Route path={"/"} component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

interface AppProps { }

export default App;