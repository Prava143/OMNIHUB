function fetchAPI(url, options = {}) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function getCategories() {
    return fetchAPI('/api/categories');
}

function getUserProfile(userId) {
    return fetchAPI(`/api/users/${userId}`);
}

function searchItems(query) {
    return fetchAPI(`/api/search?query=${encodeURIComponent(query)}`);
}

export { fetchAPI, getCategories, getUserProfile, searchItems };