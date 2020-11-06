import React from "react";
import "./fallow.scss";
import { Link } from "react-router-dom";
import FallowItem from "./fallowItem";

import amin from "../../../Assets/images/amin.png";
import hamed from "../../../Assets/images/hamed.png";

const Fallow = () => {
	const userInfo = [
		{ name: "Amin", pic: amin, userName: "@amin", verified: true },
		{
			name: "Hamed",
			pic: hamed,
			userName: "@hamed",
		},
	];
	return (
		<>
			<div className="fallow">
				<div className="fallow_header">
					<span className="header_title">چه کسانی منو دنبال می کنند</span>
					<Link to="" className="header_show-more">
						نمایش بیشتر
					</Link>
				</div>

				<div className="fallow_container">
					{userInfo.map((item) => (
						<FallowItem key={item.userName} userInfo={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default Fallow;
