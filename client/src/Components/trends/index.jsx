import React from "react";
import "./trends.scss";
import { Link } from "react-router-dom";
import TrendItem from "./trendItem";

const Trends = () => {
	return (
		<>
			<div className="trends">
				<div className="trends_header">
					<span className="header_title">ترند ها</span>
					<Link to="" className="header_show-more">
						نمایش بیشتر
					</Link>
				</div>

				<div className="trends_container">
					<TrendItem>#iran</TrendItem>
					<TrendItem>#ایران</TrendItem>
					<TrendItem>#ترند_بلند</TrendItem>
				</div>
			</div>
		</>
	);
};

export default Trends;
