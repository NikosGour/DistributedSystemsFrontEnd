import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <h1 className="header">Login Page</h1>
            <form className="vertical_form" action="/login">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <Link to="/register">If you don't have an account, please register here</Link>
                <input style={{ transform: "translateX(164%)" }} type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
