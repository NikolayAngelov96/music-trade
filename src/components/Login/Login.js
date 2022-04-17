import './Form.css';

import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        login({email, password});

        navigate('/catalog');
    }

    return (
        <section className="form">

            <h3 className="form-title">Login Form</h3>

            <div className="form-container">
                <form method="POST" onSubmit={onSubmitHandler}>
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Password" />
                    <button className="submit-btn" type="submit">Log in</button>
                </form>
            </div>
            <p>Are you new here?</p>
            <Link to="/register" className="register-link">Register</Link>
        </section>
    )
}

export default Login;