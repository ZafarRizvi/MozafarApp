import "./App.css";
import Login from "./components/login/Login";
import React, { useState, useEffect } from "react";
import Checkuser from "./components/checkuser/Checkuser";

function App() {
	const [user, setUser] = useState();
	return (
		<>
			<div className="main-login-container">
				{user ? <Login unLabel={user} /> : <Checkuser setUser={setUser} />}
			</div>
		</>
	);
}

export default App;
