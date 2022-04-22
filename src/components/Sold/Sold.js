import './Sold.css';

import AuthContext from '../../contexts/AuthContext';
import SoldCard from './SoldCard';
import Spinner from '../Spinner/Spinner';
import * as productService from '../../services/productService/productService';

import { useEffect, useState, useContext } from 'react';

const Sold = () => {
    const [soldItems, setSoldItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        productService.getSold(user).then(res => {
            setIsLoading(false);
            setSoldItems(res.results);
        });
    }, [user]);

    if(isLoading) {
        return <Spinner />
    }

    return (
        <section className="sold">

            <div className="items">
                {soldItems.length > 0
                    ? soldItems.map(prod => <SoldCard key={prod.objectId} item={prod}/>)
                    : <h2>No Sales made yet!</h2>
                }
            </div>
        </section>
    )
}

export default Sold;