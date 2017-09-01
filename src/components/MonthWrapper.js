import React from 'react';
import Month from './Month';
import Calendar from 'node-calendar';
import moment from 'moment';

export default class MonthWrapper extends React.Component {

    render() {
        const calendar = new Calendar.Calendar(Calendar.MONDAY);
        const savedProps = this.props.pureProps;
        let monthArray = calendar.monthdatescalendar(savedProps.year, savedProps.monthIndex);

        let month = monthArray.map(function(item) {
            let week = item.map(function(date) {
                return(
                    {
                        year: moment(date).year(),
                        monthIndex: moment(date).month() + 1,
                        month: moment(date).format('MMMM'),
                        dayIndex: moment(date).date(),
                        date: moment(date),
                        time: moment(date).format('h:mm a')
                    }
                )
            });
            return week;
        });

        return(
            <Month month={month} pureProps={savedProps}/>
        );
    }
}
