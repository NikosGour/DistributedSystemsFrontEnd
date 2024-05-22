import NavBar from "../components/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../assets";

const LoginPage = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const validate_form = async (e) => {
        e.preventDefault();

        const headers = {};
        headers["Authorization"] = "Basic " + btoa(`${username}:${password}`);
        headers["Content-Type"] = "plain/text";

        const res = await fetch(BASE_URL + "/ api / users / login",
            { method: "POST", headers: headers, body: username });

        const data = await res.json();

        if (res.status === 250) {
            alert("Login successful!");
            navigate("/", { state: { username: username, id: data.id, auth: headers["Authorization"] } });
        }

    }


    return (
        <div>
            <NavBar user={loc.state} />
            <h1 className="header">Login Page</h1>
            <form className="vertical_form" onSubmit={validate_form}>
                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="/register">If you don't have an account, please register here</Link>
                <input style={{ transform: "translateX(164%)" }} type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
