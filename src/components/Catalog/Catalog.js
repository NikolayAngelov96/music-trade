import './Catalog.css';
import CatalogCard from './CatalogCard';

import * as productService from '../../services/productService/productService';

import { useState, useEffect } from 'react';

const Catalog = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        productService.getAll()
        .then(res => setProducts(res.results))
    }, []);

    return (
        <section className="catalog">

            <h1 className="catalog-title">Guitar</h1>

            <div className="product-grid">
                
                {products.length > 0
                    ?   products.map(prod => <CatalogCard key={prod.objectId} item={prod}/>)
                    : <h2>No Instrument's in the database yet!</h2>
                }
            </div>
        </section>
    )
}

export default Catalog;