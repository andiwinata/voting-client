import uuid from 'uuid';

export default function getClientId() {
    let clientId = localStorage.getItem('clientId');
    if (!clientId) {
        clientId = uuid.v4();
        localStorage.setItem('clientId', clientId);
    }
    return clientId;
}