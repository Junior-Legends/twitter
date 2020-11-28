import React from "react";
import "./SideNavbar.scss";
import SideNavbarLogo from "./SideNavbarLogo";
import NavBar from "./navBar";
import Profile from "./profile";

const SideNavbar = () => {
	return (
		<header className="sideNavbar_header">
			<div className="sideNavbar_container">
				<div>
					<SideNavbarLogo />
					<NavBar />
				</div>
				<Profile />
			</div>
		</header>
	);
};

export default SideNavbar;
