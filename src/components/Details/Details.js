import './Details.css';
import image from '../../assets/luana-azevedo-OYVaNuVoqVw-unsplash.jpg';

import Spinner from '../Spinner/Spinner';
import AuthContext from '../../contexts/AuthContext';

import * as productService from '../../services/productService/productService';
import { useState, useEffect, Suspense, useContext } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useContext(AuthContext);

    const param = useParams();

    useEffect(() => {
        setIsLoading(true);
        productService.getOne(param.id).then(res => {
            setProduct(res);
            setIsLoading(false);
        });
    }, [])

    return (

        // spinner not showing
        <Suspense fallback={<Spinner />}>
            <section className="details">
                <div className="header-wrapper">
                    <div className="slideshow-container">

                        <img src={product.imageUrl} />
                    </div>

                    <div className="contact-heading">
                        <h1 className="details-title">{product.title}</h1>

                        <h3 className="details-price">{product.price} lv.</h3>

                        {user && user.id === product.objectId
                            ? ownerBtn
                            : <div className="buttons-wrap">
                                <button className="buy-btn">Buy</button>
                            </div>
                        }



                    </div>


                    <div className="info-wrap">
                        <p className="contact-title">Contact Info: </p>
                        <p className="contact-phone">Phone: {product.phone}</p>
                        <p className="contact-email">Email: example@abv.bg</p>
                    </div>
                </div>


                <div className="details-description">
                    <h3>Description:</h3>
                    {product.description}
                </div>

            </section >
        </Suspense>

    )
}

const ownerBtn = (
    <>
        <button className="edit-btn owner-btn">Edit</button>
        <button className="delete-btn owner-btn">Delete</button>
    </>
)

export default Details;