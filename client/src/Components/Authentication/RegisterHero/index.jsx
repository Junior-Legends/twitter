import React from "react";
import "./registerHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { Link } from "react-router-dom";

const RegisterHero = () => {
	return (
		<div className="register_hero">
			<div className="register_hero_theme_switch_wrapper">
				<ThemeSwitchButton />
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
					<Link to="/login" className="register_hero_login_after">
						قبلا عضو شده اید؟ ورود
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterHero;
