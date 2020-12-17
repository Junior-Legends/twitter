import React from "react";
import "./SideNavbarLogo.scss";
import { ReactComponent as Logo } from "../../../Assets/images/logo.svg";

const HeaderLogo = () => {
	return (
		<div className="header_sideNavbar-logo">
			<Logo className="sideNavbar-logo_image" />
			<h1 className="sideNavbar-logo_text">توییتر فارسی</h1>
		</div>
	);
};

export default HeaderLogo;
