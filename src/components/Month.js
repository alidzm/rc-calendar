import React from 'react';
import DayOfMonth from './DayOfMonth';
import DisplayHeader from './DisplayHeader';
import moment from 'moment';
import ModalWindow from './ModalWindow';

export default class Month extends React.Component {
    render() {
        const caption = moment(this.props.pureProps.date).format('MMMM') + ' ' + moment(this.props.pureProps.date).year();
        return(
            <div>
                <div className="month-view">
                    <DisplayHeader caption={caption} actions={this.props.pureProps.actions} isMonth={true}/>
                    <div className="days-header mdl-layout__header-row mdl-shadow--1dp">
                        <ul>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                    </div>
                    <DayOfMonth month={this.props.month} pureProps={this.props.pureProps} />
                    <ModalWindow visibility={this.props.pureProps.currentEvent.visibility} closeInfoWindow={this.props.pureProps.actions.closeInfoWindow} currentEvent={this.props.pureProps.currentEvent} />
                </div>
            </div>
        );
    }
}
