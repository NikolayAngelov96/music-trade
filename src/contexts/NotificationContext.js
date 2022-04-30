import { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

const types = {
    success: 'success',
    error: 'danger',
    warning: 'warning'
}

const initialState = {
    show: false,
    message: '',
    type: types.error
}

export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState(initialState);

    const addNotification = useCallback((message, type) => {
        setNotification({ show: true, message, type })

        setTimeout(() => {
            setNotification(initialState);
        }, 3000)
    }, [notification])

    const hideNotification = useCallback(() => setNotification(initialState),[]);
    return (
        <NotificationContext.Provider value={{ notification, addNotification, hideNotification, types }}>
            {children}
        </NotificationContext.Provider>
    )
}