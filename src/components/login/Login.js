import React from "react";
import "./login.css";

const Login = (props) => {
	return (
		<>
			<div className="login-container">
				<div className="login-nav"></div>
				<div className="mb-3 login-head">
					<h1>
						Hi, Wellcome<span>{" " + props.unLabel}</span>!
					</h1>
					<h6>
						Please Login with your<span>{" " + props.unLabel + "'s "}</span>id.
					</h6>
				</div>
				<div className="login-form">
					<form>
						{/* <h1 className="mb-3 fw-normal">Please sign in</h1> */}

						<div className="mb-3 form-floating">
							<input
								type="text"
								className="form-control"
								id="floatingInput"
								placeholder="Username"
							/>
							<label for="floatingInput">Username</label>
						</div>
						<div className="mb-3 form-floating">
							<input
								type="password"
								className="form-control"
								id="floatingPassword"
								placeholder="Password"
							/>
							<label for="floatingPassword">Password</label>
						</div>

						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
					</form>
					<button className="mb-5 w-100 btn btn-lg btn-primary login-btn">
						Sign in
					</button>
					<div className="mt-5 pt-5">
						{/* Back button */}
						<button className="btn btn-outline-primary btn-sm">
							<i className="h1 bi bi-arrow-left-square-fill"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
