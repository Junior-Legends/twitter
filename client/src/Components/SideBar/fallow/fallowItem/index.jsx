import React from "react";
import "./fallowItem.scss";

const FallowItem = ({ userInfo }) => {
	return (
		<div className="fallow-item">
			<div className="fallow-item_user-info">
				<img className="" src={userInfo.pic} alt="" />
				<div className="user-info_info-wrap">
					<p className="info-wrap_name">
						{userInfo.verified && <i className="icon-Verified"></i>}
						{userInfo.name}
					</p>
					<p className="info-wrap_user-name">{userInfo.userName}</p>
				</div>
			</div>
			<button className="fallow-item_fallow-button">دنبال کردن</button>
		</div>
	);
};

export default FallowItem;
