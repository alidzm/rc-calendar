import React from 'react';
import View from './View';
import store from '../stores/calendarStore';

export default class App extends React.Component {
    componentWillMount() {
        store.dispatch({ type: 'INITIAL_CALENDAR' });
        store.dispatch({ type: 'LOAD_EVENTS' });
    };
    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="mdl-grid">
                        <div className="view mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                            <View />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
