import React, { useState } from "react";
import { useRef } from "react";

const ResizableTextarea = ({ style, value, onChange, ...attrs }) => {
	const textareaEl = useRef();
	const [textareaHeight, setTextareaHeight] = useState("auto");

	const onChangeHandler = (event) => {
		if (onChange) onChange(event);
		const { scrollHeight } = event.currentTarget;

		setTextareaHeight("auto");
		setTextareaHeight(scrollHeight);
	};

	return (
		<textarea
			// className="resizable_textarea"
			onChange={onChangeHandler}
			ref={textareaEl}
			style={{ ...style, height: textareaHeight }}
			value={value}
			{...attrs}
		/>
	);
};

export default ResizableTextarea;
