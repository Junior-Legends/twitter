import React from "react";
import "./Scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Routes
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TestForm from "./Components/Authentication/LoginHero/TestForm";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/testform" component={TestForm} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</>
	);
};
export default App;
