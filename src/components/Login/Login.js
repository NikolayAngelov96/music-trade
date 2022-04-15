
const Login = () => {

    return (
        <section className="form">

            <h3 className="form-title">Login Form</h3>

            <div className="form-container">
                <form method="POST">
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Password" />
                    <button className="submit-btn" type="submit">Log in</button>
                </form>
            </div>
            <p>Are you new here?</p>
            <a href="#" className="register-link">Register</a>
        </section>
    )
}

export default Login;