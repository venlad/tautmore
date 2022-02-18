// // helper functions

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        return data;
    });
}
function get(url) {
    const requestOptions = {
        method: 'GET',
        // headers: {
        //     Authorization: '',
        // },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: "include",
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function remove(url) {
    const requestOptions = {
        method: 'DELETE',
    };
    return fetch(url, requestOptions).then(handleResponse);
}

export const fetchWrapper = {
    get,
    post,
    put,
    remove,
};
export default {};
