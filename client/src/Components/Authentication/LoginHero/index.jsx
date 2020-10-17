import React from "react";
import "./LoginHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { Link } from "react-router-dom";

const LoginHero = () => {
	return (
		<div className="login_hero">
			<div className="login_hero_theme_switch_wrapper">
				<ThemeSwitchButton />
			</div>
			<div className="login_hero_entry_wrapper">
				<h4>ورود به توییتر فارسی</h4>
				<form className="login_hero_form">
					<label htmlFor="">ایمیل یا نام کاربری</label>
					<input type="text" />
					<label htmlFor="">رمز عبور</label>
					<input type="password" />
					<input
						type="submit"
						value="ورود"
						className="login_hero_form_submit"
					/>
				</form>
				<div className="login_hero_register">
					<Link to="/register" className="login_hero_register_after">
						هنوز عضو نشدی؟ ثبت نام
					</Link>
					<Link to="">رمز عبور را فراموش کردم</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginHero;
