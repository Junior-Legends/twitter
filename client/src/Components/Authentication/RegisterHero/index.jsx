import React from "react";
import "./registerHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterHero = () => {
	// Handling form with react-hook-form library !
	const { register, handleSubmit, getValues, errors } = useForm();
	const onSubmit = data => console.log(data);
	// console.log(errors);

	return (
		<div className="register_hero">
			<div className="register_hero_theme_switch_wrapper">
				<ThemeSwitchButton />
			</div>
			<div className="register_hero_entry_wrapper">
				<h4>امروز به توییتر فارسی بپیوندید.</h4>
				<form className="register_hero_form" onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="">نام</label>
					<input
						type="text"
						placeholder="name"
						name="name"
						ref={register({
							required: true,
							pattern: /.{3,300}/i
						})}
					/>
					<label htmlFor="">ایمیل</label>
					<input
						type="text"
						placeholder="Email"
						name="Email"
						ref={register({
							required: true,
							//^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$
							pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
							max: 300,
							min: 4
						})}
					/>
					<div className="register_hero_form_password_container">
						<div>
							<label htmlFor="">رمز عبور</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								ref={register({
									required: true,
									max: 300,
									min: 6,
									pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i
									// "Must contain at least one number and
									//one uppercase and lowercase letter, and at least 6 or more characters"
								})}
							/>
						</div>
						<div>
							<label htmlFor="">تکرار رمزعبور</label>
							<input
								name="passwordConfirmation"
								type="password"
								ref={register({
									validate: {
										passwordEqual: value =>
											value === getValues().password ||
											"Password confirmation error!"
									}
								})}
							/>
						</div>
					</div>

					<input
						type="submit"
						value="ثبت نام"
						className="register_hero_form_submit"
					/>
					{errors.name && <p>نام کاربری را وارد کنید(حداقل 3 حرف)</p>}
					{errors.Email && <p>ایمیل را درست وارد کنید</p>}
					{errors.password && <p>پسورد را درست وارد کنید</p>}
					{errors.password && (
						<p>پسورد باید شامل حروف بزرگ و کوچک ، عدد و حداقل 6 کاراکتر باشد</p>
					)}
					{errors.passwordConfirmation && (
						<p>تکرار رمزعبور را درست وارد کنید </p>
					)}
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
