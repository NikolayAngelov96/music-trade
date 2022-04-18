import { xParseAppId, xParseRestApiKey } from '../keys/serverKeys';

const host = 'https://parseapi.back4app.com/classes';

async function request(url) {
    try {
        const res = await fetch(host + url, {
            headers: {
                'X-Parse-Application-Id': xParseAppId,
                'X-Parse-REST-API-Key': xParseRestApiKey
            }
        })

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
