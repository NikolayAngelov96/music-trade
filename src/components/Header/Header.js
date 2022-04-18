import './Header.css';

import CategoryNav from './CategoryNav';
import AuthContext from '../../contexts/AuthContext';

import { Link } from 'react-router-dom';
import { useContext } from 'react';


const userNav = (
    <div className="user">
        <ul>
            <li><Link to='/sales'>My Sales</Link></li>
            <li><Link to='/create'>Sell</Link></li>
            <li><Link id="logoutBtn" to='/logout'>Logout</Link></li>
        </ul>
    </div>
);

const guestNav = (
    <div className="guest">
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    </div>
)

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <section className="header">
                <div className="common">
                    <Link to='/'>Home</Link>
                    {user ? <p>Welcome, {user.username}</p> : null}
                    
                </div>

                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>

                {user
                    ? userNav
                    : guestNav
                }
            </section>

            <CategoryNav />
        </>
    )
}

export default Header;