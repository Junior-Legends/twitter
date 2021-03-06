import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Promo from "../../Components/Promo";
import ThemeSwitchButton from "../../Components/ThemeSwitchButton";
import ValidationErrorMessage from "../../ValidationErrorMessage";
import "./Register.scss";

const Login = () => {
	const { register, handleSubmit, watch, errors } = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
	});
	const onSubmit = (data) => console.log(data);
	return (
		<>
			<div className="register">
				<Promo />
				<div className="register_hero">
					<div className="register_hero_theme_switch_wrapper">
						<ThemeSwitchButton />
					</div>
					<div className="register_hero_entry_wrapper">
						<h4>امروز به توییتر فارسی بپیوندید.</h4>
						<form
							className="register_hero_form"
							onSubmit={handleSubmit(onSubmit)}
						>
							<label htmlFor="">نام</label>
							<input
								className="register_hero_form_input"
								spellCheck={false}
								type="text"
								name="name"
								ref={register({
									required: "نام الزامی است",

									pattern: /.{3,300}/i,
								})}
							/>
							<label htmlFor="">ایمیل</label>
							<input
								className="register_hero_form_input"
								spellCheck={false}
								type="text"
								name="email"
								ref={register({
									required: "ایمیل الزامی است",
									pattern: {
										value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
										message: "ایمیل صحیح نمیباشد",
									},
									max: 300,
									min: 4,
								})}
							/>
							<div className="register_hero_form_password_container">
								<div>
									<label htmlFor="">رمز عبور</label>
									<input
										className="register_hero_form_input"
										spellCheck={false}
										type="password"
										name="password"
										ref={register({
											required: "رمز عبور الزامی است",
											pattern: {
												value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i,
												message:
													"پسورد باید شامل حروف بزرگ و کوچک ، عدد و حداقل 6 کاراکتر باشد",
											},
											// "Must contain at least one number and
											//one uppercase and lowercase letter, and at least 6 or more characters"
										})}
									/>
								</div>
								<div>
									<label htmlFor="">تکرار رمزعبور</label>
									<input
										className="register_hero_form_input"
										spellCheck={false}
										type="password"
										name="passwordConfirmation"
										ref={register({
											validate: (value) => {
												console.log(value, watch("password"));
												return (
													value === watch("password") ||
													"تکرار رمزعبور صحیح نمیباشد"
												);
											},
										})}
									/>
								</div>
							</div>
							<ValidationErrorMessage errors={Object.values(errors)} />
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
			</div>
		</>
	);
};

export default Login;
