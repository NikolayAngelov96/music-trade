import './Sold.css';


const Sold = () => {

    return (
        <section className="sold">

            <div className="items">
                <div className="item">

                    <div className="item-info">
                        <h3 className="sold-title">Fender Bass</h3>
                        <p className="sold-price">Price: 1000lv</p>
                    </div>

                    <div className="buyer-info">
                        <h3 className="buyer-name">Name: Nikolay Angelov</h3>
                        <h4 className="buyer-address">Address: Daskal Dimo 7, Pleven, Bulgaria</h4>
                        <h4 className="buyer-phone">Phone: 0987654321</h4>
                    </div>

                </div>

                <div className="item">

                    <div className="item-info">
                        <h3 className="sold-title">Fender Tele</h3>
                        <p className="sold-price">Price: 10000lv</p>
                    </div>

                    <div className="buyer-info">
                        <h3 className="buyer-name">Name: Nikolay Angelov</h3>
                        <h4 className="buyer-address">Address: Daskal Dimo 7, Pleven, Bulgaria</h4>
                        <h4 className="buyer-phone">Phone: 0987654321</h4>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sold;