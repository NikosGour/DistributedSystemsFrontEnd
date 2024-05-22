import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../assets";



const RegisterPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [afm, setAfm] = useState("");

    const navigate = useNavigate();

    const validateForm = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
            email: email,
            phone_number: phone,
            address: address,
            afm: afm
        }

        const headers = {}
        headers["Authorization"] = "Basic " + btoa("root:root");
        headers["Content-Type"] = "application/json";


        const res = await fetch(BASE_URL + "/api/users", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(user)
        });

        const data = await res.json();
        navigate("/login");
        alert("User created successfully!");
    }


    return (
        <div>
            <NavBar />
            <h1 className="header">Register Page</h1>
            <form className="vertical_form" onSubmit={validateForm}>
                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <label htmlFor="address">Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <label htmlFor="afm">ΑΦΜ:</label>
                <input type="text" value={afm} onChange={(e) => setAfm(e.target.value)} required />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default RegisterPage;
