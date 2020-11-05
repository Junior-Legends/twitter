import React from "react";
import "./headerLogo.scss";
import { ReactComponent as Logo } from "../../../Assets/images/logo.svg";

const HeaderLogo = () => {
	return (
		<div className="header_header-logo">
			<Logo className="header-logo_logo" />
			<h1 className="header-logo_name">توییتر فارسی</h1>
		</div>
	);
};

export default HeaderLogo;
