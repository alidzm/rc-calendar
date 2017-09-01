import moment from 'moment';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    date: moment(),
    year: moment().year(),
    month: moment().format('MMMM'),
    monthIndex: moment().month() + 1,
    dayIndex: moment().date()
});

function muteState (state, newDate) {
    return state.withMutations(mutable => {
        mutable.set('date', Immutable.fromJS(newDate))
        mutable.set('year', Immutable.fromJS(newDate.year()))
        mutable.set('month', Immutable.fromJS(newDate.format('MMMM')))
        mutable.set('monthIndex', Immutable.fromJS(newDate.month() + 1))
        mutable.set('dayIndex', Immutable.fromJS(newDate.date()))
        return mutable;
    });
}

function changeMonthReducer(state = initialState, action) {
    let newDate;
    switch(action.type) {
        case 'INITIAL_CALENDAR':
            return state;
        case 'ADD':
            newDate = moment(state.get('date')).add(1, 'months');
            return muteState(state, newDate);
        case 'SUBTRACT':
            newDate = moment(state.get('date')).subtract(1, 'months');
            return muteState(state, newDate);
        case 'ADD_WEEK':
            newDate = moment(state.get('date')).add(7, 'days');
            return muteState(state, newDate);
        case 'SUBTRACT_WEEK':
            newDate = moment(state.get('date')).subtract(7, 'days');
            return muteState(state, newDate);
        default:
            return state;
    }
}

export default changeMonthReducer;
