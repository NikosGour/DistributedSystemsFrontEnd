import mail_pic from '../images/mail.png';
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {
    const navigate = useNavigate();

    const isInHomePage = props.isInHomePage || false;
    const isInIncomingPage = props.isInIncomingPage || false;
    return (<>
        <ul className='navbar'>
            <li><h1 onClick={() => { if (!isInHomePage) navigate("/") }}>UserName</h1></li>
            <li><img onClick={() => { if (!isInIncomingPage) navigate("/incoming") }} src={mail_pic} alt='Kapio' width={30} height={30}></img></li>
            <li><h3 onClick={() => { navigate("/login") }}>Login/Logout</h3></li>
        </ul>
    </>
    );
}

export default NavBar;