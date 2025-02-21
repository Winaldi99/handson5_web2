import logo from "../assets/logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
return (
<div className="navbar">
    <img src={logo} alt="" width={180} height={30} />
    <ul>
        <NavLink to="/">
            <li>Home</li>
        </NavLink>
        <NavLink to="/Product">
            <li>About</li>
        </NavLink>
        <NavLink to="/About">
            <li>Product</li>
        </NavLink>
        <NavLink to="/Contact">
            <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs">
            <li>Jobs</li>
        </NavLink>
    </ul>
    <button onClick={() => navigate("/about")}>Get Started</button>
</div>
)
}

export default Navbar