import React from "react";
import "./navItem.scss";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
	return (
		<NavLink
			exact
			to={props.to}
			className="nav-bar_nav-item"
			activeClassName="active"
		>
			<i className={`icon-${props.icon}`}></i>
			<i className={`icon-${props.icon}-fill`}></i>
			<span>{props.children}</span>
		</NavLink>
	);
};

export default NavItem;
