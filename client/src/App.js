import React from "react";
import "./Scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Theme } from "./context";

// import Routes
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TestForm from "./Components/Authentication/LoginHero/TestForm";
import { useState } from "react";

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem(`theme`) ? localStorage.getItem(`theme`) : "dark"
	);
	return (
		<Theme.Provider value={[theme, setTheme]}>
			<div data-scheme={theme}>
				<Router>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/testform" component={TestForm} />
						<Route path="/" exact component={Home} />
					</Switch>
				</Router>
			</div>
		</Theme.Provider>
	);
};
export default App;
