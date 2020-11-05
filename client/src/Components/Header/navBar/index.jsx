import React from "react";
import "./navBar.scss";
import NavItem from "./navItem";
import NewTweetButton from "./newTweetButton";

const NavBar = () => {
	return (
		<nav className="header_nav-bar">
			<NavItem to="/" icon="Home">
				خانه
			</NavItem>
			<NavItem to="/M" icon="Notification">
				اعلان ها
			</NavItem>
			<NavItem to="/M" icon="Message">
				پیام ها
			</NavItem>
			<NavItem to="/M" icon="Bookmark">
				علاقه مندی ها
			</NavItem>
			<NavItem to="/M" icon="Document">
				لیست ها
			</NavItem>

			<NewTweetButton />
		</nav>
	);
};

export default NavBar;
