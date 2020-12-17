import React from "react";
import "./ValidationErrorMessage.scss";

const ValidationErrorMessage = ({ errors = [] }) => {
	return (
		<div className="error_message">
			{errors.map((err, index) => {
				return <p key={index.toString()}>{err?.message}</p>;
			})}
		</div>
	);
};

export default ValidationErrorMessage;
