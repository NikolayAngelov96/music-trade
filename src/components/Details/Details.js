import './Details.css';

import Spinner from '../Spinner/Spinner';
import ConfirmDialog from '../Common/ConfirmDialog';
import AuthContext from '../../contexts/AuthContext';

import * as productService from '../../services/productService/productService';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


const Details = () => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

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

        productService.remove(param.id, user)
            .then(res => navigate('/catalog'))
            .finally(() => setShowModal(false))
    }

    function onClickDelete(e) {
        e.preventDefault();

        setShowModal(true);
    }

    const ownerBtn = (
        <>
            <Link to={`/edit/${product.objectId}`} className="edit-btn owner-btn">Edit</Link>
            <button className="delete-btn owner-btn" onClick={onClickDelete}>Delete</button>
        </>
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
         <ConfirmDialog show={showModal} onClose={() => setShowModal(false)} onConfirm={onDeleteHandler} />
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
                                <Link to={`/checkout/${product.objectId}`} className="buy-btn">Buy</Link>
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
        </>
    )
}

export default Details;