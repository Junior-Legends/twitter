import React from "react";
import "./followItem.scss";

const FollowItem = ({ userInfo }) => {
	return (
		<div className="follow-item">
			<div className="follow-item_user-info">
				<img className="" src={userInfo.pic} alt="" />
				<div className="user-info_info-wrap">
					<p className="info-wrap_name">
						{userInfo.verified && <i className="icon-Verified"></i>}
						{userInfo.name}
					</p>
					<p className="info-wrap_user-name">{userInfo.username}</p>
				</div>
			</div>
			<button className="follow-item_follow-button">دنبال کردن</button>
		</div>
	);
};

export default FollowItem;
