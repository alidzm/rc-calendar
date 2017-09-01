function eventsReducer(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default eventsReducer;
