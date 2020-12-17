import themes from "../../Constants/Themes";

const agentPreferTheme = window.matchMedia("(prefers-color-scheme: dark)")
	.matches
	? themes.dark
	: themes.light;

const presistTheme =
	localStorage.getItem("theme") === themes.dark ? themes.dark : themes.light;

const initPresistTheme = presistTheme || agentPreferTheme;

export default initPresistTheme;
