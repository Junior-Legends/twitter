import React from "react";
import "./registerHero.scss";

const RegisterHero = () => {
	return (
		<div className="register_hero">
			<div className="register_hero_theme_switch_wrapper">
				<input defaultChecked type="checkbox" id="checkbox" />
				<label className="theme_switch" htmlFor="checkbox">
					<i className="icon-Moon"></i>
					<i className="icon-Sun"></i>
					<div className="round"></div>
				</label>
			</div>
			<div className="register_hero_entry_wrapper">
				<h4>امروز به توییتر فارسی بپیوندید.</h4>
				<form className="register_hero_form">
					<label htmlFor="">نام</label>
					<input type="text" />
					<label htmlFor="">ایمیل</label>
					<input type="text" />
					<div className="register_hero_form_password_container">
						<div>
							<label htmlFor="">رمز عبور</label>
							<input type="password" />
						</div>
						<div>
							<label htmlFor="">تکرار رمزعبور</label>
							<input type="password" />
						</div>
					</div>

					<input
						type="submit"
						value="ثبت نام"
						className="register_hero_form_submit"
					/>
				</form>
				<div className="register_hero_login">
					<a href="/login" className="register_hero_login_after">
						قبلا عضو شده اید؟ ورود
					</a>
				</div>
			</div>
		</div>
	);
};

export default RegisterHero;
