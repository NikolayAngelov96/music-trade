
const Details = () => {

    return (
        <section className="details">
            <div className="header-wrapper">
                <div className="slideshow-container">

                    <ul className="carousel-list">
                        <li className="carousel-item"><img src="./assets/luana-azevedo-OYVaNuVoqVw-unsplash.jpg" alt="" /></li>
                    </ul>

                    <div className="dots">
                        <button className="dot"></button>
                        <button className="dot"></button>
                        <button className="dot"></button>
                    </div>

                    <div className="prev-arrow">&#10094;</div>
                    <div className="next-arrow">&#10095;</div>
                </div>

                <div className="contact-heading">
                    <h1 className="details-title">Fender Stratocaster</h1>

                    <h3 className="details-price">1200 lv.</h3>
                    <div className="buttons-wrap">
                        <button className="buy-btn">Buy</button>
                    </div>

                    <button className="edit-btn owner-btn">Edit</button>
                    <button className="delete-btn owner-btn">Delete</button>
                </div>


                <div className="info-wrap">
                    <p className="contact-title">Contact Info: </p>
                    <p className="contact-phone">Phone: 0987654321</p>
                    <p className="contact-email">Email: example@abv.bg</p>
                </div>
            </div>


            <div className="details-description">
                <h3>Description:</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam explicabo, itaque assumenda sit
            </div>

        </section >
    )
}

export default Details;