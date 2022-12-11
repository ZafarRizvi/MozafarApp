import React from "react";
import "./login.css";

const Login = (props) => {
	return (
		<>
			<div className="login-container">
				<div className="login-form">
					<div className="login-form-header">
						<h1>{props.unLabel} Sign In</h1>
					</div>
					<div className="login-form-body">
						<form>
							<div className="mb-3">
								<label htmlFor="exampleInputUsername" className="form-label">
									Username
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputUsername"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div className="btn-div">
								<button className="btn btn-primary">Login</button>
								<button className="btn btn-secondary">Back</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
