import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MonthWrapper from './MonthWrapper';
import WeekWrapper from './WeekWrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class View extends React.Component {
    render() {
        const classes = ' mdl-button mdl-js-button lt-sub-btn-md mdl-js-ripple-effect';
        let weekClasses = classes;
        let monthClasses = classes;
        this.MonthWrapper = () => (<MonthWrapper pureProps={this.props}/>);
        this.WeekWrapper = () => (<WeekWrapper pureProps={this.props}/>);
        return(
                <div className="mdl-card mdl-shadow--2dp">
                    <header className="mdl-layout__header cal-top">
                        <div className="mdl-layout__header-row">
                            <button><Link to="/week" className={weekClasses}>Week</Link></button>
                            <button><Link to="/month" className={monthClasses}>Month</Link></button>
                        </div>
                    </header>
                    <Switch>
                        <Route exact path="/month" component={this.MonthWrapper} />
                        <Route exact path="/week" component={this.WeekWrapper} />
                    </Switch>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        date: state.date.get('date'),
        year: state.date.get('year'),
        month: state.date.get('month'),
        monthIndex: state.date.get('monthIndex'),
        dayIndex: state.date.get('dayIndex'),
        events: state.events,
        currentEvent: state.infoWindow.toJS()
    }
}

function mapActionsToProps(dispatch) {
    return {
        actions: {
            addMonth() {
                dispatch({ type: 'ADD' });
            },

            subtractMonth() {
                dispatch({ type: 'SUBTRACT' });
            },

            addWeek() {
                dispatch({ type: 'ADD_WEEK' });
            },

            subtractWeek() {
                dispatch({ type: 'SUBTRACT_WEEK' });
            },

            getInfo(event) {
                dispatch({ type: 'GET_INFO', payload: event});
            },

            closeInfoWindow() {
                dispatch({ type: 'CLOSE_INFO_WINDOW' });
            },

            loadSpeakers(speakers) {
                dispatch({ type: 'LOAD_SPEAKERS', payload: speakers });
            }
        }
    }
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(View));
