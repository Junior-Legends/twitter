import React from "react";
import "./themeSwitchButton.scss";

const ThemeSwitchButton = () => {
	return (
		<>
			<div className="theme_switch_button">
				<input defaultChecked type="checkbox" id="checkbox" />
				<label className="theme_switch" htmlFor="checkbox">
					<i className="icon-Moon"></i>
					<i className="icon-Sun"></i>
					<div className="round"></div>
				</label>
			</div>
		</>
	);
};

export default ThemeSwitchButton;
