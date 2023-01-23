import mail_pic from './mail.png';


const NavBar = () => {
    return (<>
        <ul className='navbar'>
            <li><h1>UserName</h1></li>
            <li><img src={mail_pic} alt='Kapio' width={30} height={30}></img></li>
            <li><h3>Login/Logout</h3></li>
        </ul>
    </>
    );
}

export default NavBar;