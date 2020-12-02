import React from "react";
import "./sideBar.scss";
import SearchBox from "./searchBox";
import Trends from "./trends";
import Fallow from "./fallow";

const SideBar = () => {
	return (
		<div className="side-bar_container">
			<SearchBox />
			<Trends />
			<Fallow />
		</div>
	);
};

export default SideBar;
