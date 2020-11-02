import { isUndefined } from "lodash";
import { useContext } from "react";
import { ToggleThemeCtx } from "../../Context/Theme";

const useToggleTheme = () => {
	const ctx = useContext(ToggleThemeCtx);
	if (isUndefined(ctx)) throw Error("no context provider around here");

	return ctx;
};

export default useToggleTheme;
