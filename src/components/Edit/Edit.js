import * as productService from '../../services/productService/productService'

import { useNavigate } from 'react-router-dom';

const Edit = ({
    product,
    hideEdit,
    user
}) => {

    const navigate = useNavigate();

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
            return alert('Please fill all required fields');
        }

        price = Number(price);

        if (price < 0) {
            return alert('Price cannot be below 0!');
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
                // when navigate to details/productId it not re-rendering with the new info
                // use different URL for /edit/objectId or should re-direct to /catalog
                // navigate(`/details/${product.objectId}`);
                navigate('/catalog');

                hideEdit();
            })
    }

    return (
        <section className="create">


            <h3 className="create-title">Create your listing</h3>
            <div className="create-container">
                <form method="POST" onSubmit={onSubmitHandler}>

                    <div className="create-header">

                        <label htmlFor="title">Title:</label> <input type="text" name="title" defaultValue={product.title} />

                        <label htmlFor="price">Price:</label> <input type="text" name="price" defaultValue={product.price} />

                    </div>

                    <select className="select-category" name="category" defaultValue={product.category}>
                        <option value="">--Select Category--</option>
                        <option value="guitar">Guitar</option>
                        <option value="bass">Bass</option>
                        <option value="drums">Drums</option>
                        <option value="keys">Keys</option>
                        <option value="microphones">Microphones</option>
                        <option value="accessories">Accessories</option>
                        <option value="memorabilia">Memorabilia</option>
                    </select>

                    <div className="description-container">
                        <label htmlFor="description">
                            Description:
                        </label>
                        <textarea className="create-description" name="description" placeholder="Describe your item..."
                            cols="77" rows="20">{product.description}</textarea>
                    </div>

                    <div className="image-container">
                        <label htmlFor="imageUrl">Image URL's:</label>

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
                        <button className="cancel-btn" onClick={() => hideEdit()}>Cancel</button>
                        <button className="submit-btn" type="submit">Edit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Edit;