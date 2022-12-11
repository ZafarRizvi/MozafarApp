import React from "react";
import "./checkuser.css";

const Checkuser = (props) => {
	return (
		<>
			<div className="checkuser-container">
				<div className="checkuser-form">
					<div className="checkuser-form-header">
						<p>Login as a Doctor, Admin or a Patient?</p>
					</div>
					<div className="checkuser-form-body">
						<form>
							<div className="form-group">
								<button type="submit" onClick={() => props.setUser("Doctor")}>
									Doctor
								</button>
							</div>
							<div className="form-group">
								<button type="submit" onClick={() => props.setUser("Admin")}>
									Admin
								</button>
							</div>
							<div className="form-group">
								<button type="submit" onClick={() => props.setUser("Patient")}>
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
