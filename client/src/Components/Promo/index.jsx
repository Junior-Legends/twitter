import React from "react";
import "./Promo.scss";
import { ReactComponent as Logo } from "../../Assets/images/logo.svg";

const Promo = () => {
	return (
		<div className="auth_promo">
			<div className="promo_app-brand">
				<div>
					<Logo className="app-brand_logo" />
					<h1 className="app-brand_name">توییتر فارسی</h1>
				</div>
				<span className="promo_app-sumarry">
					ببینید اکنون در جهان چه اتفاقی می افتد...
				</span>
			</div>

			<div className="promo_feature">
				<div className="feature_item">
					<i className="icon-Search-fill"></i>
					<span>علاقه مندی هایتان را دنبال کنید.</span>
				</div>
				<div className="feature_item">
					<i className="icon-Users-fill"></i>
					<span>
						از چیزهایی که مردم درباره آن ها صحبت می کنند‌‌‌، خبر دار شوید.
					</span>
				</div>
				<div className="feature_item">
					<i className="icon-Message-fill"></i>
					<span>به گفتگو بپیوندید.</span>
				</div>
			</div>
			<div></div>
			<a
				href="https://github.com/Junior-Legends/twitter"
				className="promo_github-page"
			>
				<i className="icon-Github"></i>این پروژه منبع باز می باشد.
			</a>
		</div>
	);
};

export default Promo;
