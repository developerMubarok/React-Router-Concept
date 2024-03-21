import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <span>My Website</span>
            <nav>
                <Link to="./">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts"> Posts</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/contact"> Contact Us</NavLink>

                {/* <Link to="/users">Users</Link> */}
                {/* <Link to="/posts">Posts</Link>
                <Link to="./about">about</Link>
                <Link to="./contact">Contact Us</Link> */}
            </nav>
        </div>
    );
};

export default Header;