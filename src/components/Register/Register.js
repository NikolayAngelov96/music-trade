
const Register = () => {

    return (
        <section className="form">

            <h3 className="form-title">Register</h3>

            <div className="form-container">
                <form method="POST">
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="rePass" placeholder="Repeat Password" />
                    <button className="submit-btn" type="submit">Register</button>
                </form>
            </div>
            <p>Already have an account?</p>
            <a href="#" className="register-link">Login</a>
        </section>
    )
}

export default Register;