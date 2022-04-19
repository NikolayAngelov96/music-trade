import './Details.css';

import Spinner from '../Spinner/Spinner';
import AuthContext from '../../contexts/AuthContext';

import * as productService from '../../services/productService/productService';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Edit from '../Edit/Edit';

const Details = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showEdit, setShowEdit] = useState(false);

    const { user } = useContext(AuthContext);

    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(param.id).then(res => {
            setIsLoading(false);
            setProduct(res);
        });
    }, [param.id])

    function onDeleteHandler(e) {
        // TODO: show confirm screen
    
        productService.remove(param.id, user)
            .then(res => navigate('/catalog'))
    }

    function hideEdit() {
        setShowEdit(false);
    }
    
    const ownerBtn = (
        <>
            <button className="edit-btn owner-btn" onClick={() => setShowEdit(true)}>Edit</button>
            <button className="delete-btn owner-btn" onClick={onDeleteHandler}>Delete</button>
        </>
    )

    if (isLoading) {
        return <Spinner />
    }

    if(showEdit) {
        return <Edit product={product} hideEdit={hideEdit} user={user} />
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
                        <p className="contact-phone">Phone: {product.phone ? product.phone : 'Unknown'}</p>
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

export default Details;