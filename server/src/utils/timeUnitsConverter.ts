class TimeUnitsConverter {
	static minToMilisec(min: number): number {
		return min * 60 * 1000;
	}
}

export default TimeUnitsConverter;
