import React from 'react'
import "./Login.css";
const Login = () => {
	return (
		<>
		 <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>
			<form>
				 <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
			</form>
		</>
	)
}

export default Login