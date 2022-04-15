
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

                <div className="user">
                    <ul>
                        <li><a href="#">My Sales</a></li>
                        <li><a href="#">Sell</a></li>
                        <li><a id="logoutBtn" href="#">Logout</a></li>
                    </ul>
                </div>

                <div className="guest">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </section>

            <section className="secondary-nav">
                <ul>
                    <li><a href="#">Guit/Bass</a></li>
                    <li><a href="#">Drums</a></li>
                    <li><a href="#">Keys</a></li>
                    <li><a href="#">Microphones</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Music Memorabilia</a></li>
                </ul>
            </section>
        </>
    )
}

export default Header;