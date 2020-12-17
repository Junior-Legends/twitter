import React from "react";
import "./SideNavbar.scss";
import SideNavbarLogo from "./SideNavbarLogo";
import NavBar from "./navBar";
import Profile from "./profile";

const SideNavbar = () => {
	return (
		<div className="sideNavbar_container">
			<div>
				<SideNavbarLogo />
				<NavBar />
			</div>
			<Profile />
		</div>
	);
};

export default SideNavbar;
