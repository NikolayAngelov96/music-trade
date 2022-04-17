import '../Login/Form.css';

import AuthContext from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Register = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if(email === '' || password === '' || rePass === '') {
            // TODO:
        }

        if(password !== rePass) {
            // TODO:
        }

        login({email, password});

        navigate('/catalog');
    }

    return (
        <section className="form">

            <h3 className="form-title">Register</h3>

            <div className="form-container">
                <form method="POST" onSubmit={onSubmitHandler}>
                    <input type="text" name="email" placeholder="Email Address" />
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