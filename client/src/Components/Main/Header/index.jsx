import React from "react";
import "./Header.scss";

const Header = ({ title }) => {
	return (
		<header className="header">
			<h3>{title}</h3>
		</header>
	);
};

export default Header;
