import loadSpeakers from '../services/loadSpeakers';

function speakersLoadingMiddleware({ dispatch }) {
    return next => action => {
        if (action.type === 'LOAD_SPEAKERS') {
            loadSpeakers(action.payload)
                .then(response => {
                    const responses = response.map(data => data.json());
                    Promise.all(responses)
                        .then(speakers => dispatch({ type: 'RECEIVE_SPEAKERS', payload: speakers }))
                });
        }
        return next(action);
    }
}

export default speakersLoadingMiddleware;
