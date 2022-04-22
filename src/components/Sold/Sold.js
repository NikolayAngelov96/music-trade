import './Sold.css';

import AuthContext from '../../contexts/AuthContext';
import SoldCard from './SoldCard';
import * as productService from '../../services/productService/productService';

import { useEffect, useState, useContext } from 'react';

const Sold = () => {
    const [soldItems, setSoldItems] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        productService.getSold(user).then(res => setSoldItems(res.results));
    }, [user]);

    return (
        <section className="sold">

            <div className="items">
                {soldItems.length > 0
                    ? soldItems.map(item => <SoldCard key={item.objectId} item={item}/>)
                    : <h2>No Sales made yet!</h2>
                }
                <SoldCard />
            </div>
        </section>
    )
}

export default Sold;