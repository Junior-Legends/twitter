import React, { useState, useEffect } from "react";
import themes from "../../Constants/Themes";
import initPresistTheme from "./initalTheme";

export const ThemeCtx = React.createContext();
export const ToggleThemeCtx = React.createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initPresistTheme || themes.dark);

	useEffect(() => {
		const preferThemeChangeHandler = (e) => {
			const newColorScheme = e.matches ? themes.dark : themes.light;
			setTheme(newColorScheme);
			localStorage.setItem("theme", newColorScheme);
		};

		const preferDarkMedia = window.matchMedia("(prefers-color-scheme: dark)");
		preferDarkMedia.addEventListener("change", preferThemeChangeHandler);
	}, []);

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
