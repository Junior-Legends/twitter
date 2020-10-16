import React from "react";

// import Main Components
import Sidebar from "../../Components/Authentication/Sidebar";
import LoginHero from "../../Components/Authentication/LoginHero";

const Login = () => {
	return (
		<>
			<div className="login">
				<Sidebar />
				<LoginHero />
			</div>
		</>
	);
};

export default Login;