import './Header.css';

import CategoryNav from './CategoryNav';
import AuthContext from '../../contexts/AuthContext';


import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const query = formData.get('search');

        navigate(`/catalog?search=${query}`);
    }

    return (
        <>
            <section className="header">
                <div className="common">
                    <Link to='/'>Home</Link>
                    {user ? <p>Welcome, {user.username}</p> : null}

                </div>

                <form method="POST" className="search" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" name="search" />
                    <button type="submit" className="search-button">Search</button>
                </form>

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