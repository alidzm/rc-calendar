import React from 'react';
import moment from 'moment';

export default class DayOfMonth extends React.Component {

    render() {
        let days = this.props.month.map((week, index) => {
            let newWeek = week.map(day => {
                let classes = 'day';
                if (moment().format().toString().slice(0, 10) === day.date.format().toString().slice(0, 10)) {
                    classes += ' today';
                }
                if (this.props.pureProps.month !== day.month)
                    classes += ' other-month';

                let dayEvents = this.props.pureProps.events.filter(event => {
                    return new Date(event.start).toString().slice(3, 15) === day.date.toString().slice(3, 15);
                });

                return(
                    <div key={moment(day.date).format().toString().slice(0, 10)} className={classes}>
                        <span className="num">{day.dayIndex}</span>
                        {dayEvents.map((event, index) =>
                            <div key={index} className={'event '+event.type} style={{top: 40+index*25}} id="show-dialog" onClick={() => {this.props.pureProps.actions.getInfo(event); this.props.pureProps.actions.loadSpeakers(event.speakers);}}>
                                {event.type}
                            </div>)}
                    </div>
                );
            });
            return(
                <div key={moment(week[index].date).format().toString().slice(0, 10) + index} className="week">{newWeek}</div>
            );
        });
        return(
            <div>{days}</div>
        );
    }
}
