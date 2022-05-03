import './Create.css'

import * as productService from '../../services/productService/productService';

import AuthContext from '../../contexts/AuthContext';
import { NotificationContext } from '../../contexts/NotificationContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { user } = useContext(AuthContext);
    const { addNotification, types } = useContext(NotificationContext);
    const navigate = useNavigate();

    function onCancel(e) {
        e.preventDefault();
        navigate('/');
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
            addNotification('Please fill all fileds marked with "*" !', types.warning)
            return;
        }

        price = Number(price);

        if (price < 0) {
            addNotification('Price cannot be below 0!', types.warning);
            return;
        }

        const listing = {
            title,
            price,
            category,
            description,
            imageUrl,
            email,
            phone,
            ownerId: {
                "__type": "Pointer",
                "className": "_User",
                "objectId": user.id
            }
        }

        productService.create(listing, user)
            .then(res => {
                addNotification('Listing added successfully! Good luck with your sale!', types.success);
                navigate('/catalog');
            })
    }


    return (
        <section className="create">


            <h3 className="create-title">Create your listing</h3>
            <div className="create-container">
                <form method="POST" onSubmit={onSubmitHandler}>

                    <div className="create-header">

                        <label htmlFor="title">Title*:</label> <input type="text" name="title" />

                        <label htmlFor="price">Price*:</label> <input type="text" name="price" />

                    </div>

                    <select className="select-category" name="category">
                        <option value="">--Select Category*--</option>
                        <option value="guitars">Guitar</option>
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
                            cols="77" rows="20"></textarea>
                    </div>

                    <div className="image-container">
                        <label htmlFor="imageUrl">Image URL's:</label>

                        <div className="img-input-wrapper">
                            <input type="text" name="imageUrl" placeholder="Paste your image URL here" />
                        </div>
                    </div>

                    <div className="contact-container">
                        <label htmlFor="email">Contact Info:</label>

                        <input name="email" type="text" placeholder="Email" />
                        <input name="phone" type="text" placeholder="Phone number" />
                    </div>


                    <div className="buttons-container">
                        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
                        <button className="submit-btn" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Create;