import React from "react";
import "./navBar.scss";
import NavItem from "./navItem";
import NewTweetButton from "./newTweetButton";

const NavBar = () => {
	return (
		<nav className="sideNavbar_nav-items">
			<NavItem to="/" icon="Home">
				خانه
			</NavItem>
			<NavItem to="/notifications" icon="Notification">
				اعلان ها
			</NavItem>
			<NavItem to="/messages" icon="Message">
				پیام ها
			</NavItem>
			<NavItem to="/bookmarks" icon="Bookmark">
				علاقه مندی ها
			</NavItem>
			<NavItem to="/lists" icon="Document">
				لیست ها
			</NavItem>

			<NewTweetButton />
		</nav>
	);
};

export default NavBar;
