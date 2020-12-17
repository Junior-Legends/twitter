import React from "react";
import Header from "./Header";
import "./MainContent.scss";

const MainContent = ({ children, title }) => {
	return (
		<div className="main">
			<Header title={title} />
			<div className="main-content">{children}</div>
		</div>
	);
};

export default MainContent;
