import { isUndefined } from "lodash";
import { useContext } from "react";
import { ThemeCtx } from "../../Context/Theme";

const useTheme = () => {
	const ctx = useContext(ThemeCtx);
	if (isUndefined(ctx)) throw Error("no context provider around here");

	return ctx;
};

export default useTheme;
