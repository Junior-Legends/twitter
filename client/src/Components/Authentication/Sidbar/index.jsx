import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Logo } from "../../../Assets/images/logo.svg";

const Sidbar = () => {
	return (
		<div className="auth_sidebar">
			<div className="sidebar_app-brand">
				<Logo className="app-brand_logo" />
				<h1 className="app-brand_name">توییتر فارسی</h1>
			</div>
			<span className="sidebar_app-sumarry">
				ببینید اکنون در جهان چه اتفاقی می افتد...
			</span>
		</div>
	);
};

export default Sidbar;
