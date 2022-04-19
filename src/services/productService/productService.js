import { xParseAppId, xParseRestApiKey } from '../keys/serverKeys';

const host = 'https://parseapi.back4app.com/classes';

async function request(url, method, data, user) {

    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': xParseAppId,
            'X-Parse-REST-API-Key': xParseRestApiKey
        }
    }

    if(user) {
        options.headers['X-Parse-Session-Token'] = user.token;
    }

    if(method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(host + url, options)

        if (res.ok === false) {
            const error = await res.json();
            throw new Error(error.error);
        }

        return await res.json();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function getAll() {
    return request('/Catalog');
}

export async function getOne(id) {
    return request('/Catalog/' + id);
}

export async function create(data, user) {
    return request('/Catalog', 'POST', data, user);
}
