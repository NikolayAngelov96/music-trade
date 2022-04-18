import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

import Spinner from '../Spinner/Spinner';

import * as authService from '../../services/authService/authService';


const Logout = () => {
    const { clearUserData } = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(() => {

        authService.logout().then(res => {
            clearUserData()
            navigate('/');
        })

    }, [navigate, clearUserData]);

    return <Spinner />
};

export default Logout;
