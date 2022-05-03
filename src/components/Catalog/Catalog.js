import './Catalog.css';
import Spinner from '../Spinner/Spinner';
import CatalogCard from './CatalogCard';

import * as productService from '../../services/productService/productService';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Catalog = () => {

    const [ products, setProducts ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const params = useParams();

    useEffect(() => {
        const search = searchParams.get('search');
        setIsLoading(true);

        productService.getAllByCategory(params.category, search)
        .then(res => {
            setIsLoading(false);
            setProducts(res.results)
        })

    }, [params.category, searchParams]);

    if(isLoading) {
        return <Spinner />
    }
    return (
        <section className="catalog">

            <h1 className="catalog-title">{params.category}</h1>

            <div className="product-grid">
                
                {products.length > 0
                    ?   products.map(item => <CatalogCard key={item.objectId} item={item}/>)
                    : <h2>No Instrument's in the database yet!</h2>
                }
            </div>
        </section>
    )
}

export default Catalog;