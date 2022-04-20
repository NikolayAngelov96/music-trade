import './Catalog.css';
import CatalogCard from './CatalogCard';
import Spinner from '../Spinner/Spinner';

import * as productService from '../../services/productService/productService';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Catalog = () => {

    const [ products, setProducts ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const param = useParams();

    useEffect(() => {
        productService.getAllByCategory(param.category)
        .then(res => {
            setIsLoading(false);
            setProducts(res.results)
        })

    }, [param.category]);

    if(isLoading) {
        return <Spinner />
    }
    return (
        <section className="catalog">

            <h1 className="catalog-title">{param.category}</h1>

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