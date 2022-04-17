import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';


const Logout = () => {

    const { logout } = useContext(AuthContext);

    logout();

    return <Navigate to="/" />
};

export default Logout;
