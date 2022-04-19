import './Details.css';

import Spinner from '../Spinner/Spinner';
import AuthContext from '../../contexts/AuthContext';

import * as productService from '../../services/productService/productService';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useContext(AuthContext);

    const param = useParams();

    useEffect(() => {
        productService.getOne(param.id).then(res => {
            setIsLoading(false);
            setProduct(res);
        });
    }, [param.id])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className="details">
            <div className="header-wrapper">
                <div className="slideshow-container">

                    <img src={product.imageUrl} alt='musical instrument' />
                </div>

                <div className="contact-heading">
                    <h1 className="details-title">{product.title}</h1>

                    <h3 className="details-price">{product.price} lv.</h3>

                    {user && user.id === product.ownerId.objectId
                        ? ownerBtn
                        : <div className="buttons-wrap">
                            <button className="buy-btn">Buy</button>
                        </div>
                    }

                    <div className="info-wrap">
                        <p className="contact-title">Contact Info: </p>
                        <p className="contact-phone">Phone: {product.phone}</p>
                        <p className="contact-email">Email: {product.email ? product.email : 'Unknown'}</p>
                    </div>
                </div>
            </div>
            
            <div className="details-description">
                <h3>Description:</h3>
                {product.description}
            </div>

        </section >
    )
}

const ownerBtn = <>
        <button className="edit-btn owner-btn">Edit</button>
        <button className="delete-btn owner-btn">Delete</button>
    </>


export default Details;