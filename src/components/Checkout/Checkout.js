import './Checkout.css';

import * as productService from '../../services/productService/productService';

import { NotificationContext } from '../../contexts/NotificationContext';

import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [item, setItem] = useState({});
    const { addNotification, types } = useContext(NotificationContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(params.id).then(res => setItem(res));
    }, [params.id])

    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const { firstName, lastName, address, phone } = Object.fromEntries(formData);

            if (firstName === '' || lastName === '' || address === '' || phone === '') {
                addNotification('All fields are required', types.warning);
                return
            }

            const data = {
                firstName,
                lastName,
                address,
                buyerPhone: phone,
                productName: item.title,
                productPrice: item.price,
                ownerId: item.ownerId.objectId
            }

            await productService.purchase(data);

            addNotification('Successful purchase!', types.success);

            await productService.remove(params.id);
            navigate('/catalog');
        } catch (err) {
            addNotification(err.message, types.error)
        }
    }

    return (
        <>
            <h1 className="page-title">Checkout</h1>
            <section className="bought-product">
                <div className="title-wrapper">
                    <h2 className="products-title">{item.title}</h2>
                    <h3 className="products-price">Price: {item.price} lv.</h3>
                </div>
                <div className="check-form">

                    <div className="check-container">
                        <h3 className="check-title">Shipping Information</h3>
                        <form method="POST" onSubmit={onSubmitHandler}>
                            <input type="text" name="firstName" placeholder="First Name" />
                            <input type="text" name="lastName" placeholder="Last Name" />
                            <input type="text" name="address" placeholder="Address" />
                            <input type="text" name="phone" placeholder="Phone Number" />
                            <button className="submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;