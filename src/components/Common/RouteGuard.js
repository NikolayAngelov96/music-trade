import { Outlet, Navigate } from 'react-router-dom';

const RouteGuard = ({
    user
}) => {

    if(!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default RouteGuard;