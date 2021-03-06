import * as productService from '../../services/productService/productService'

import AuthContext from '../../contexts/AuthContext';
import { NotificationContext } from '../../contexts/NotificationContext';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

const Edit = () => {

    const [product, setProduct] = useState({});
    
    const navigate = useNavigate();
    const param = useParams();

    const { user } = useContext(AuthContext);
    const { addNotification, types } = useContext(NotificationContext);

    useEffect(() => {

        productService.getOne(param.id)
            .then(res => setProduct(res));

    }, [param.id]);

    function onCancel(e) {
        e.preventDefault();
        navigate(`/details/${param.id}`);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        let {
            title,
            price,
            category,
            description,
            imageUrl,
            email,
            phone
        } = Object.fromEntries(formData);

        if (title === '' || price === '' || description === '' || category === '') {
            addNotification('Please fill all fields marked with "*".', types.warning);
            return
        }

        price = Number(price);

        if (price < 0) {
            addNotification('Price cannot be below 0.', types.warning);
            return
        }

        const listing = {
            title,
            price,
            category,
            description,
            imageUrl,
            email,
            phone
        }

        productService.edit(product.objectId, listing, user)
            .then(res => {
                addNotification('You successfully edited your listing.', types.success);
                navigate(`/details/${product.objectId}`);
            })
    }

    return (
        <section className="create">


            <h3 className="create-title">Edit your listing</h3>
            <div className="create-container">
                <form method="POST" onSubmit={onSubmitHandler}>

                    <div className="create-header">

                        <label htmlFor="title">Title*:</label> <input type="text" name="title" defaultValue={product.title} />

                        <label htmlFor="price">Price*:</label> <input type="text" name="price" defaultValue={product.price} />

                    </div>

                    {/* Not displaying the correct option */}
                    <select className="select-category" name="category" defaultValue={product.category}>
                        <option value="">--Select Category*--</option>
                        <option value="guitar">Guitar</option>
                        <option value="bass">Bass</option>
                        <option value="drums">Drums</option>
                        <option value="keys">Keys</option>
                        <option value="microphones">Microphones</option>
                        <option value="accessories">Accessories</option>
                        <option value="music">Memorabilia</option>
                    </select>

                    <div className="description-container">
                        <label htmlFor="description">
                            Description*:
                        </label>
                        <textarea className="create-description" name="description" placeholder="Describe your item..."
                            cols="77" rows="20" defaultValue={product.description}></textarea>
                    </div>

                    <div className="image-container">
                        <label htmlFor="imageUrl">Image URL:</label>

                        <div className="img-input-wrapper">
                            <input type="text" name="imageUrl" placeholder="Paste your image URL here" defaultValue={product.imageUrl} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <label htmlFor="email">Contact Info:</label>

                        <input name="email" type="text" placeholder="Email" defaultValue={product.email} />
                        <input name="phone" type="text" placeholder="Phone number" defaultValue={product.phone} />
                    </div>


                    <div className="buttons-container">
                        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
                        <button className="submit-btn" type="submit">Edit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Edit;