class ResponseError extends Error {
	public status;

	constructor(msg: string, status: number) {
		super(msg);
		this.status = status;
	}
}
export default ResponseError;
