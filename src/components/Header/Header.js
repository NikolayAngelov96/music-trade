import './Header.css';

import CategoryNav from './CategoryNav';

import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
            <section className="header">
                <div className="common">
                    <Link to='/'>Home</Link>
                    <p>Welcome, user</p>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>

                {/* <div className="user">
                    <ul>
                        <li><Link to='/sales'>My Sales</Link></li>
                        <li><Link to='/create'>Sell</Link></li>
                        <li><Link id="logoutBtn" to='/logout'>Logout</Link></li>
                    </ul>
                </div> */}

                <div className="guest">
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </section>

            <CategoryNav />
        </>
    )
}

export default Header;