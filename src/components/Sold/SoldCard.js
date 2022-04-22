

const SoldCard = ({
    item
}) => {

    return (
        <div className="item">

            <div className="item-info">
                <h3 className="sold-title">{item.productName}</h3>
                <p className="sold-price">Price: {item.productPrice}lv</p>
            </div>

            <div className="buyer-info">
                <h3 className="buyer-name">Name: {item.firstName} {item.lastName}</h3>
                <h4 className="buyer-address">Address: {item.address}</h4>
                <h4 className="buyer-phone">Phone: {item.buyerPhone}</h4>
            </div>

        </div>
    )
};

export default SoldCard;