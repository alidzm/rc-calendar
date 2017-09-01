import { createStore, combineReducers, applyMiddleware } from 'redux';
import changeMonthReducer from '../reducers/changeMonthReducer';
import eventsReducer from '../reducers/eventsReducer';
import eventsLoadingMiddleware from '../middlewares/eventsLoadingMiddleware';
import speakersLoadingMiddleware from '../middlewares/speakersLoadingMiddleware';
import getInfoReducer from '../reducers/getInfoReducer';

const appReducers = combineReducers({
    date: changeMonthReducer,
    events: eventsReducer,
    infoWindow: getInfoReducer
});

const store = createStore(
    appReducers,
    applyMiddleware(eventsLoadingMiddleware, speakersLoadingMiddleware)
);

window.store = store;

export default store;
