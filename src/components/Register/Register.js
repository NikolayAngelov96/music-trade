import '../Login/Form.css';
import AuthContext from '../../contexts/AuthContext';
import * as authService from '../../services/authService/authService';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

const initialValues = {
    username: '',
    password: '',
    rePass: ''
}

const Register = () => {
    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmited) {
            authService.register(inputs.username, inputs.password)
                .then(result => {
                    const userData = {
                        username: inputs.username,
                        id: result.objectId,
                        token: result.sessionToken
                    }

                    setUserData(userData);
                    navigate('/catalog');
                })
        } else {
            setIsSubmited(false);
        }
    }, [isSubmited])

    function onChangeHandler(e) {
        const { name, value } = e.target;

        setInputs({ ...inputs, [name]: value });
    }

    function validate(values) {
        const errors = {};

        if (!values.username) {
            errors.username = 'Username is required!';
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long!'
        }

        if (!values.rePass) {
            errors.rePass = 'Confirm your password';
        } else if (values.password !== values.rePass) {
            errors.password = 'Passwords do not match!'
        }

        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        setErrors(validate(inputs));
        setIsSubmited(true);

    }

    // async function onSubmitHandler(e) {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const username = formData.get('username');
    //     const password = formData.get('password');
    //     const rePass = formData.get('rePass');


    //     if (username === '' || password === '' || rePass === '') {
    //         return alert('All fields are required!')
    //     }

    //     if (password !== rePass) {
    //         return alert('Passwords don\'t match!');
    //     }

    //     authService.register(username, password)
    //         .then(result => {
    //             const userData = {
    //                 username: result.username,
    //                 id: result.objectId,
    //                 token: result.sessionToken
    //             };

    //             setUserData(userData);
    //             navigate('/catalog');
    //         });
    // }

    return (
        <section className="form">
            <h3 className="form-title">Register</h3>

            <div className="form-container">
                <form method="POST" onSubmit={handleSubmit}>
                    {errors.username && <span className='error-message'>{errors.username}</span>}
                    <input
                        type="text"
                        name="username"
                        placeholder="Choose your username"
                        onChange={onChangeHandler}
                        value={inputs.username}
                    />
                    {errors.password && <span className='error-message'>{errors.password}</span>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                        value={inputs.password}
                    />
                    {errors.rePass && <span className='error-message'>{errors.rePass}</span>}
                    <input
                        type="password"
                        name="rePass"
                        placeholder="Repeat Password"
                        onChange={onChangeHandler}
                        value={inputs.rePass}
                    />
                    <button className="submit-btn" type="submit">Register</button>
                </form>
            </div>
            <p>Already have an account?</p>
            <Link to="/login" className="register-link">Login</Link>
        </section>
    )
}

export default Register;