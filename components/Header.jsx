import { NavLink } from "react-router-dom"
import Logo from '../images/logo.svg'
import SignUp from './ActiveBtn/Signup';
import Login from './ActiveBtn/Login';

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="logo_container">
            <NavLink to='/home'><img src={Logo} alt='Logo' /></NavLink>
        </div>
        <div className="menu_container">
            <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='/home'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='/about'>About us</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : 'menuList'} to='/Contact'>Contact Us</NavLink>
        </div>
        <div className="activelink_container">
            <SignUp/>
            <Login/>
        </div>
    </div>
    </>
  )
}

export default Header