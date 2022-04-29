import './Form.css';
import AuthContext from '../../contexts/AuthContext';
import { NotificationContext } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService/authService';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Login = () => {

    const { setUserData } = useContext(AuthContext);
    const { addNotification, types } = useContext(NotificationContext);
    const navigate = useNavigate();

    async function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');

        if(username === '') {
            return alert('Username is required!')
        }

        if(password === '') {
            return alert("Password is required!")
        }

        authService.login(username, password)
            .then(data => {
                const userData = {
                    username: data.username,
                    id: data.objectId,
                    token: data.sessionToken
                };

                setUserData(userData);
                addNotification('You loggen in successfully!', types.success);
                navigate('/catalog');
            })


    }

    return (
        <section className="form">

            <h3 className="form-title">Login Form</h3>

            <div className="form-container">
                <form method="POST" onSubmit={onSubmitHandler}>
                    <input type="text" name="username" placeholder="Enter your username" />
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