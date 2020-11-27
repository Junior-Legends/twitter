import React from "react";
import "./themeSwitchButton.scss";
import themes from "../../Constants/Themes";
import useTheme from "../../Hooks/UseTheme";
import useToggleTheme from "../../Hooks/UseToggleTheme";

const ThemeSwitchButton = () => {
	const theme = useTheme();
	const toggleTheme = useToggleTheme();

	return (
		<>
			<div className="theme_switch_button">
				<input
					checked={theme === themes.dark}
					type="checkbox"
					id="checkbox"
					onChange={toggleTheme}
				/>
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
