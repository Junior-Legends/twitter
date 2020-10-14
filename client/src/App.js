import React from "react";
import "./Scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Routes
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</>
	);
};
export default App;
