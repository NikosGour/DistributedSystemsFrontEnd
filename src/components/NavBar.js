import mail_pic from '../images/mail.png';
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {
    const navigate = useNavigate();

    const user = props.user || null;

    const isInHomePage = props.isInHomePage || false;
    const isInIncomingPage = props.isInIncomingPage || false;
    return (<>
        <ul className='navbar'>
            <li><h1 onClick={() => { if (!isInHomePage) navigate("/", { state: user }) }}>{user?.username}</h1></li>
            <li><img onClick={() => { if (!isInIncomingPage) navigate("/incoming", { state: user }) }} src={mail_pic} alt='Kapio' width={30} height={30}></img></li>
            {user == null ?
                <li><h3 onClick={() => { navigate("/login", { state: user }) }}>Login</h3></li>
                :
                <li><h3 onClick={() => { navigate("/", { state: null }) }}>Logout</h3></li>
            }
        </ul>
    </>
    );
}

export default NavBar;