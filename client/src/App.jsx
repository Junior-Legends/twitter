import React from "react";
import "./Scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from './Context/Theme/index';

// import Routes
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./Components/Layout";

const App = () => {
	return (
		<ThemeProvider>
			<Layout>
				<Router>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" exact component={Home} />
					</Switch>
				</Router>
			</Layout>
		</ThemeProvider>
	);
};
export default App;
