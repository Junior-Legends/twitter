import React from "react";
import "./LoginHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";

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
					<a href="/register" className="login_hero_register_after">
						هنوز عضو نشدی؟ ثبت نام
					</a>
					<a href="">رمز عبور را فراموش کردم</a>
				</div>
			</div>
		</div>
	);
};

export default LoginHero;
