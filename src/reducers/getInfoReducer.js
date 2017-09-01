import Immutable from 'immutable';

const initialInfo = Immutable.fromJS({
    visibility: false
})

function getInfoReducer(state = initialInfo, action) {
    switch (action.type) {
        case 'GET_INFO':
            return state.withMutations(mutable => {
                mutable.set('description', Immutable.fromJS(action.payload.description));
                mutable.set('duration', Immutable.fromJS(action.payload.duration));
                mutable.set('id', Immutable.fromJS(action.payload.id));
                mutable.set('location', Immutable.fromJS(action.payload.location));
                mutable.set('resources', Immutable.fromJS(action.payload.resources));
                mutable.set('speakers', Immutable.fromJS(action.payload.speakers));
                mutable.set('start', Immutable.fromJS(action.payload.start));
                mutable.set('title', Immutable.fromJS(action.payload.title));
                mutable.set('type', Immutable.fromJS(action.payload.type));
                mutable.set('visibility', !mutable.get('visibility'));
                return mutable;
            });
        case 'CLOSE_INFO_WINDOW':
            return state
                .set('visibility', !state.get('visibility'));
        case 'RECEIVE_SPEAKERS':
            return state
                .set('speakers', Immutable.fromJS(action.payload));
        default:
            return state;
    }
}

export default getInfoReducer;
