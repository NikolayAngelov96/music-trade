import { xParseAppId, xParseRestApiKey } from '../keys/serverKeys';

const host = 'https://parseapi.back4app.com';

export async function login(username, password) {
    return fetch(host + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': xParseAppId,
            'X-Parse-REST-API-Key': xParseRestApiKey
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (res.ok === false) {
            const error = res.json();
            throw new Error(error.error);
        }

        return res.json();
    }).catch(err => {
        alert(err.message);
        throw err;
    });

};

export function register(username, password) {
    return fetch(host + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': xParseAppId,
            'X-Parse-REST-API-Key': xParseRestApiKey
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (res.ok === false) {
            const error = res.json();
            throw new Error(error.error);
        }

        return res.json();
    }).catch(err => {
        alert(err.message);
        throw err;
    })
}

export function logout() {
    return fetch(host + '/logout', {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': xParseAppId,
            'X-Parse-REST-API-Key': xParseRestApiKey
        }
    });
}
