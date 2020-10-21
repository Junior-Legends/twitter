import React, { useContext } from "react";
import "./themeSwitchButton.scss";
import { Theme } from "../../context";

const ThemeSwitchButton = () => {
	const [theme, setTheme] = useContext(Theme);

	const handleChange = (e) => {
		const theme = e.target.checked ? "dark" : "light";
		localStorage.setItem(`theme`, theme);
		setTheme(localStorage.getItem(`theme`));
	};

	return (
		<>
			<div className="theme_switch_button">
				<input
					defaultChecked={theme === "dark" ? true : false}
					type="checkbox"
					id="checkbox"
					onChange={handleChange}
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
