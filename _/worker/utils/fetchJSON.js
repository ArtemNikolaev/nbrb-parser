module.exports = function(url) {
    return fetch(url)
        .then(response => response.json())
}