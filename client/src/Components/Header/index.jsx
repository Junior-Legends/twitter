import React from "react";
import "./header.scss";
import HeaderLogo from "./headerLogo";
import NavBar from "./navBar";
import Profile from "./profile";

const Header = () => {
	return (
		<header>
			<div className="header_container">
				<div>
					<HeaderLogo />
					<NavBar />
				</div>
				<Profile />
			</div>
		</header>
	);
};

export default Header;
