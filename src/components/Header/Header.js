import './Header.css';

import CategoryNav from './CategoryNav';

const Header = () => {

    return (
        <>
            <section className="header">
                <div className="common">
                    <a href="#">Home</a>
                    <p>Welcome, user</p>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>

                {/* <div className="user">
                    <ul>
                        <li><a href="#">My Sales</a></li>
                        <li><a href="#">Sell</a></li>
                        <li><a id="logoutBtn" href="#">Logout</a></li>
                    </ul>
                </div> */}

                <div className="guest">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </section>

            <CategoryNav />
        </>
    )
}

export default Header;