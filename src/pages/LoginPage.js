import NavBar from "../components/NavBar";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>
            <NavBar />
            <h1 className="header">Login Page</h1>
            <form className="vertical_form" action="/login">
                <label htmlFor="username">Username:</label>
                <input type="text" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <Link to="/register">If you don't have an account, please register here</Link>
                <input style={{ transform: "translateX(164%)" }} type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
