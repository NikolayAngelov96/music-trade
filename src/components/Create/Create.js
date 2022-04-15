
const Create = () => {

    return (
        <section className="create">


            <h3 className="create-title">Create your listing</h3>
            <div className="create-container">
                <form method="POST">

                    <div className="create-header">

                        <label htmlFor="title">Title:</label> <input type="text" name="title" />

                        <label htmlFor="price">Price:</label> <input type="text" name="price" />

                    </div>

                    <select className="select-category" name="category">
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
                            cols="77" rows="20"></textarea>
                    </div>

                    <div className="image-container">
                        <label htmlFor="imgUrl">Image URL's:</label>

                        <div className="img-input-wrapper">
                            <input type="text" name="imgUrl" placeholder="Paste your image URL here" />
                            <input type="text" name="imgUrl-second" placeholder="Paste your image URL here" />
                            <input type="text" name="imgUrl-third" placeholder="Paste your image URL here" />
                        </div>
                    </div>

                    <div className="contact-container">
                        <label htmlFor="email">Contact Info:</label>

                        <input name="email" type="text" placeholder="Email" />
                        <input name="phone" type="text" placeholder="Phone number" />
                    </div>


                    <div className="buttons-container">
                        <button className="cancel-btn">Cancel</button>
                        <button className="submit-btn" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Create;