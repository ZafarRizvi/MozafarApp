import "./App.css";
import Login from "./components/login/Login";
import React, { useState } from "react";
import Checkuser from "./components/checkuser/Checkuser";

function App() {
	const [user, setUser] = useState();
	return (
		<>
			<div className="main-login-container">
				<div className="leftsidediv">
					{user ? <Login unLabel={user} /> : <Checkuser setUser={setUser} />}
				</div>
				<div className="rightsidediv">
					{/* <img src="./asserts/imgs/Bg.jpg" alt="bg" /> */}
				</div>
			</div>
		</>
	);
}

export default App;
