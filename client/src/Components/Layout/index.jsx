import React from "react";
import useTheme from "../../Hooks/UseTheme";

const Layout = ({ children }) => {
	const theme = useTheme();
	return <main data-scheme={theme}>{children}</main>;
};

export default Layout;
