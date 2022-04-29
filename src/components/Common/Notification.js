import Toast from 'react-bootstrap/Toast';

import { NotificationContext } from '../../contexts/NotificationContext';
import { useContext } from 'react';

const Notification = () => {
    const { notification, hideNotification } = useContext(NotificationContext);

    if (notification.show === false) {
        return null;
    }

    return (
        <Toast className="d-inline-block m-1" bg={notification.type} onClose={hideNotification}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{notification.type === 'danger' ? 'Oops!' : notification.type}</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>
                {notification.message}
            </Toast.Body>
        </Toast>
        
    )
}

export default Notification;