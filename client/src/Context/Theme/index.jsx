import React, { useState } from "react";
import themes from "../../Constants/Themes";

export const ThemeCtx = React.createContext();
export const ToggleThemeCtx = React.createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	const toggleTheme = () => {
		setTheme((prevTheme) => {
			let newTheme = themes.dark;

			if (prevTheme === themes.dark) {
				newTheme = themes.light;
			}
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};
	return (
		<ThemeCtx.Provider value={theme}>
			<ToggleThemeCtx.Provider value={toggleTheme}>
				{children}
			</ToggleThemeCtx.Provider>
		</ThemeCtx.Provider>
	);
};
