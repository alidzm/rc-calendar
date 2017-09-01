import loadEvents from '../services/loadEvents';

function eventsLoadingMiddleware({ dispatch }) {
    return next => action => {
        if (action.type === 'LOAD_EVENTS') {
            loadEvents().then(events => {
                dispatch({ type: 'RECEIVE_EVENTS', payload: events });
            })
        }
        return next(action);
    }
}

export default eventsLoadingMiddleware;
