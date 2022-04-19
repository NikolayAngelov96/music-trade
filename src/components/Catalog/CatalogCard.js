import { Link } from 'react-router-dom';

const CatalogCard = ({
    item
}) => {

    return (
        <div className="card">
            <img src={item.imageUrl} alt="Instrument" />


            <div className="item-body">
                <Link to={`/details/${item.objectId}`} className="item-title">{item.title}</Link>

                <p className="item-price">{item.price}lv</p>

                <div className="buttons">
                    <button className="buy-btn">Buy</button>
                    <Link to={`/details/${item.objectId}`} className="details-btn">Details</Link>
                </div>

            </div>
        </div>
    )
};

export default CatalogCard;
