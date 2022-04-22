import './Checkout.css';

import * as productService from '../../services/productService/productService';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [item, setItem] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(params.id).then(res => setItem(res));
    }, [params.id])

    async function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { firstName, lastName, address, phone } = Object.fromEntries(formData);

        if (firstName === '' || lastName === '' || address === '' || phone === '') {
            return alert('All fields are required');
        }

        const data = {
            firstName,
            lastName,
            address,
            buyerPhone: phone,
            product: {
                "__type": "Pointer",
                "className": "Catalog",
                "objectId": item.objectId
            },
            owner: {
                "__type": "Pointer",
                "className": "_User",
                "objectId": item.ownerId.objectId
            },
            ownerId: item.ownerId.objectId
        }

        await productService.purchase(data);
        navigate('/');
    }


    // I can get the owner from the product(it has a pointer to the ownerId);
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