import React from 'react';
import moment from 'moment';
import DisplayHeader from './DisplayHeader';
import ModalWindow from './ModalWindow';

export default class Week extends React.Component {
    render() {
        const events = this.props.pureProps.events;
        const actions = this.props.pureProps.actions;

        const dayToMatch = this.props.pureProps;
        let weeks = this.props.month.filter(function (week) {
            return week.some(function (day) {
                return dayToMatch.dayIndex === day.dayIndex && dayToMatch.monthIndex === day.monthIndex;
            });
        });

        const caption = `${weeks[0][0].month} ${weeks[0][0].dayIndex} - ${weeks[0][6].month} ${weeks[0][6].dayIndex}`;

        let arrayAM = [];
        let arrayPM = [];

        for (let i = 0; i < 12; i++) {
            if (!i) {
                arrayAM[i] = "12AM";
                arrayPM[i] = "12PM";
            }
            else {
                arrayAM[i] = `${i}AM`;
                arrayPM[i] = `${i}PM`;
            }
        }

        const timeArray = arrayAM.concat(arrayPM);

        let weekToDisplay = weeks[0].map(function (day) {
            return {
                moment: moment(day.date),
                dayName: moment(day.date).format('dddd')
            }
        });

        let jsx = weekToDisplay.map(function (day, index) {
            day.events = events.filter(event => {
                return moment(day.moment).get('year') === new Date(event.start).getFullYear() &&
                    moment(day.moment).get('month') === new Date(event.start).getMonth() &&
                    moment(day.moment).get('date') === new Date(event.start).getDate()
            });
            return day;
        });

        return(
            <div className="week-view">
                <DisplayHeader caption={caption} actions={this.props.pureProps.actions} isMonth={false} />
                <div className="week days-header mdl-layout__header-row mdl-shadow--1dp">
                    <ul>
                        <li className="time-zone">CDT</li>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                        <li>Saturday</li>
                        <li>Sunday</li>
                    </ul>
                </div>
                <div className="days days-header  mdl-shadow--1dp">
                    <ul>
                        <li className="time-zone">
                            {timeArray.map((time) =>
                                <div key={time} className="time-cells">
                                    {time}
                                </div>
                            )}
                        </li>

                    {jsx.map((day, index) => {
                        return day.events.length ? <li key={index}>{day.events.map(event => <div className={event.type} style={{height: event.duration/60000*56/60, top: (new Date(event.start).getHours()*60+new Date(event.start).getMinutes()+new Date(event.start).getSeconds()/60)*56/60}} id="show-dialog" onClick={() => {actions.getInfo(event); actions.loadSpeakers(event.speakers);}}><span>{event.type}</span></div>)}</li> : <li></li>
                    })}
                    </ul>
                </div>
                <ModalWindow visibility={this.props.pureProps.currentEvent.visibility} closeInfoWindow={this.props.pureProps.actions.closeInfoWindow} currentEvent={this.props.pureProps.currentEvent} />
            </div>
        );
    }
}
