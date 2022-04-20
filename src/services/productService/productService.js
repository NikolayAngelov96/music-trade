import { xParseAppId, xParseRestApiKey } from '../keys/serverKeys';

const host = 'https://parseapi.back4app.com/classes';

async function request(url, method, user, data) {

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

    if(method === 'POST'|| method === 'PUT') {
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

export async function getAllByCategory(query) {
    if(query) {
        return request(`/Catalog?where={"category":"${query}"}`);
    } else {
        return request('/Catalog');
    }
}

export async function getOne(id) {
    return request('/Catalog/' + id);
}

export async function create(data, user) {
    return request('/Catalog', 'POST', user, data);
}

export async function remove(id, user) {
    return request('/Catalog/' + id, 'DELETE', user);
}

export async function edit(id, data, user) {
    return request('/Catalog/' + id, 'PUT', user, data);
}
