const useLocalStorage = key => {
	const getValue = () => {
		return window.localStorage.getItem(key);
	};

	const setLocalValue = value => {
		return window.localStorage.setItem(key, value);
	};

	const localValue = getValue();

	return [localValue, setLocalValue];
};

export default useLocalStorage;
