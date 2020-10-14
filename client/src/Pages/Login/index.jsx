import React from "react";

// import Main Components
import Sidebar from "../../Components/Authentication/Sidbar";
import Hero from "../../Components/Authentication/Hero";

const Login = () => {
	return (
		<>
			<div className="login">
				<Sidebar />
				<Hero />
			</div>
		</>
	);
};

export default Login;
