import React from "react";
import useTheme from "../../Hooks/UseTheme";
import "./layout.scss";

const Layout = ({ children }) => {
	const theme = useTheme();
	return (
		<main data-scheme={theme} className="layout">
			{children}
		</main>
	);
};

export default Layout;
