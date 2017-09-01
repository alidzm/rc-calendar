function loadEvents () {
    return fetch('http://128.199.53.150/events')
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            return response.json();
        })
}

export default loadEvents;
