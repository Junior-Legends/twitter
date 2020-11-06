import React from "react";
import "./searchBox.scss";

const SearchBox = () => {
	return (
		<div className="search-box">
			<input
				type="text"
				className="search-box_input"
				placeholder="جستجوی توییتر فارسی"
			/>
		</div>
	);
};

export default SearchBox;
