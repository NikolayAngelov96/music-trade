import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

import * as authService from '../../services/authService/authService';


const Logout = () => {
    const { clearUserData } = useContext(AuthContext);

    useEffect(() => {

        authService.logout().then(res => clearUserData())

    }, [clearUserData]);

    return <Navigate to="/" />
};

export default Logout;
