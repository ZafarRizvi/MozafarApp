import React from "react";
import "./checkuser.css";

const Checkuser = (props) => {
	return (
		<>
			<div className="checkuser-container">
				<div className="checkuser-form">
					<div className="checkuser-form-header">
						{/* <h1>You are a ?</h1> */}
					</div>
					<div className="checkuser-form-body">
						<form>
							<div className="form-group">
								<button
									className="w-100 btn btn-lg btn-primary login-btn"
									type="submit"
									onClick={() => props.setUser("Doctor")}
								>
									Doctor
								</button>
							</div>
							<div className="form-group">
								<button
									className="w-100 btn btn-lg btn-primary login-btn"
									type="submit"
									onClick={() => props.setUser("Admin")}
								>
									Admin
								</button>
							</div>
							<div className="form-group">
								<button
									className="w-100 btn btn-lg btn-primary login-btn"
									type="submit"
									onClick={() => props.setUser("Patient")}
								>
									Patient
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkuser;
