import '../Login/Form.css';
import AuthContext from '../../contexts/AuthContext';
import * as authService from '../../services/authService/authService';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';


const Register = () => {
    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    async function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (username === '' || password === '' || rePass === '') {
            // TODO:
        }

        if (password !== rePass) {
            // TODO:
        }

        authService.register(username, password)
            .then(result => {
                const userData = {
                    username: result.username,
                    id: result.objectId,
                    token: result.sessionToken
                };

                setUserData(userData);
            });

        navigate('/catalog');
    }

    return (
        <section className="form">

            <h3 className="form-title">Register</h3>

            <div className="form-container">
                <form method="POST" onSubmit={onSubmitHandler}>
                    <input type="text" name="username" placeholder="Choose your username" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="rePass" placeholder="Repeat Password" />
                    <button className="submit-btn" type="submit">Register</button>
                </form>
            </div>
            <p>Already have an account?</p>
            <Link to="/login" className="register-link">Login</Link>
        </section>
    )
}

export default Register;