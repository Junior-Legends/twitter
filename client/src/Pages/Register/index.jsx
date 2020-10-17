import React from "react";

// import Main Components
import Sidebar from "../../Components/Authentication/Sidebar";
import RegisterHero from "../../Components/Authentication/RegisterHero";

const Login = () => {
	return (
		<>
			<div className="register">
				<Sidebar />
				<RegisterHero />
			</div>
		</>
	);
};

export default Login;
