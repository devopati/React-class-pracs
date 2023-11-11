import Header from "../components/Header";
import {useState} from "react"
import {toast} from "react-toastify";
import axios from "axios"
import "./Login.css";
const Services = () => {
const [formData, setFormData] = useState({
	username:"",
	password:"",
	email:"",
	repeatPassword:"",
});

	const {username,email,password,repeatPassword} = formData;
	const HandleOnChange = (e) => {
		const {name, value} =e.target
		setFormData({...formData, [name]:value})
	};

	const handleInput = async (e) => {
		e.preventDefault();


		if(!username || !email || !password || !repeatPassword){
			return toast.error("all fields required");
		}	

		try {
			await axios.post("http://localhost:4000/app/signup", formData);
		} catch(error) {
			return toast.error(error.message);
		}
	};
	return (

		<>
			<Header />
			<div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>
			<form onSubmit ={handleInput}>
				 <h3>signup Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" 
        placeholder="username" 
        name="username"
        value={username}
         onChange ={HandleOnChange}
         required
        />

        <label htmlFor="email">Email</label>
        <input type="email" 
        placeholder="email" 
        name="email"
        value = {email}
        required
         onChange ={HandleOnChange}
        />


        <label htmlFor="password">Password</label>
        <input type="password" 
        placeholder="password"
        name="password"
         value={password}
         required
         onChange ={HandleOnChange}
         />
        <label htmlFor="repeatpassword">repeatPassword</label>
        <input type="password" 
        placeholder="repeatPassword" 
        name="repeatPassword"
        value={repeatPassword}
        required
        onChange ={HandleOnChange}
        />
        <button type = "submit">sign up </button>
			</form>
		</>
	)
}

export default Services