import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <section className="error-page">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">OOPS! Page not found!</h2>
            <p className="error-para">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="submit-btn">Return Home</Link>
        </section>
    )
}

export default NotFound;