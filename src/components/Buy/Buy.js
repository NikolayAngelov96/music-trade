
const Buy = () => {

    return (
        <section className="bought-product">

            <div className="form">
                <h3 className="form-title">Shipping Information</h3>

                <div className="form-container">
                    <form method="POST">
                        <input type="text" name="name" placeholder="Full Name" />
                        <input type="text" name="address" placeholder="Address" />
                        <input type="text" name="phone" placeholder="Phone Number" />
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Buy;