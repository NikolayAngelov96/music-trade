import './CategoryNav.css';

import { Link } from 'react-router-dom';

const CategoryNav = () => {

    return (
        <section className="secondary-nav">
            <ul>
                <li><Link to="/catalog/guitar">Guit/Bass</Link></li>
                <li><Link to="/catalog/drums">Drums</Link></li>
                <li><Link to="/catalog/keys">Keys</Link></li>
                <li><Link to="/catalog/microphones">Microphones</Link></li>
                <li><Link to="/catalog/accessories">Accessories</Link></li>
                <li><Link to="/catalog/music">Music Memorabilia</Link></li>
            </ul>
        </section>
    )
}

export default CategoryNav;