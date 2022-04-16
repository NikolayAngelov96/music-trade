import './Catalog.css';

const Catalog = () => {

    return (
        <section className="catalog">

            <h1 className="catalog-title">Guitar</h1>

            <div className="product-grid">
                <div className="card">
                    <img src="./assets/toyamakanna-zM9SpeN_3Lc-unsplash.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title">Fender Strat</a>

                        <p className="item-price">200lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <img src="https://muzikercdn.com/uploads/products/2669/266927/main_a8d2ca99.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title">Gibson SG Standard</a>

                        <p className="item-price">200lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <img src="./assets/acoustic.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title">Acoustic</a>

                        <p className="item-price">700lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <img src="./assets/bass.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title">Fender Bass</a>

                        <p className="item-price">1500lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <img src="./assets/lespaul.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title">Gibson Les Paul</a>

                        <p className="item-price">2000lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>

                <div className="card">
                    <img src="./assets/telecaster.jpg" alt="" />


                    <div className="item-body">
                        <a href="#" className="item-title ancher">Fender Telecaster</a>

                        <p className="item-price">1200lv</p>

                        <div className="buttons">
                            <button className="buy-btn">Buy</button>
                            <button className="details-btn">Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;