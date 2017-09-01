import moment from 'moment';
import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class ModalWindow extends React.Component {

    constructor(props) {
        super(props);
        this.closeInfoWindow = props.closeInfoWindow;
        this.visibility = props.visibility;
        this.event = props.currentEvent;
    }

    render() {
        const endTime = calculateEndTime(this.event.start, this.event.duration);
        return <div>
            {
                this.visibility &&
                <ModalContainer onClose={() => this.closeInfoWindow()}>
                    <ModalDialog>
                        <div className="mdl-grid center-items">
                            <div className="mdl-cell mdl-cell--12-col mdl-cell--10-col-phone">
                                <h3 className="info-type">{this.event.type}: "{this.event.title}"</h3>
                                <div className="date-box mdl-cell mdl-shadow--2dp mdl-cell--12-col">
                                    <p className="text-center">{new Date(this.event.start).toString().slice(3, 24)} &#8212; {endTime}</p>
                                </div>
                            </div>
                            <div className="card-description mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h4 className="event-description mdl-card__title-text">Description:</h4>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    {this.event.description}
                                    <a className="event-comments" href="https://docs.google.com/forms/d/e/1FAIpQLSeN-OYDhazcs7WhZi_oae-u8bCLuVcsksCeZkYcfRMMwj3eJA/viewform">
                                        We will happy to see your comments
                                    </a>
                                </div>
                            </div>
                            <div className="card-description mdl-card mdl-shadow--2dp">
                                <div className="card-title mdl-card__title">
                                    <h4 className="event-description mdl-card__title-text">Resources:</h4>
                                </div>
                                <ul className="resources-list mdl-card__supporting-text">
                                    {this.event.resources.map((resource, index) => (
                                        <li key={index} className="resource">
                                            <a target="_blank" href={resource.resource}>{resource.type}</a>
                                            <p className="resource description">{resource.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="speakers mdl-card mdl-shadow--2dp">
                                <div className="card-title mdl-card__title">
                                    <h4 className="event-description mdl-card__title-text">Speakers:</h4>
                                </div>
                                <ul className="mdl-list">
                                    {this.event.speakers.map((speaker, index) => (
                                        <li key={index} className="mdl-chip mdl-chip--contact break-after">
                                            <img className="mdl-chip__contact" src={speaker.avatar} alt={speaker.id} />
                                            <span className="mdl-chip__text">{speaker.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="google-map card-description mdl-card mdl-shadow--2dp">
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.3018895706728!2d27.53501591591372!3d53.890837980096784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe17154d34f%3A0x5649e4b54da3e840!2svulica+Fabrycyusa+4%2C+Minsk!5e0!3m2!1sen!2sby!4v1497204030287" width="100%" height="600" frameBorder="0" style={{border: 0}} allowFullScreen="true"></iframe>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <span>{this.event.location}</span>
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer>
            }
        </div>;
    }
}

export default ModalWindow;

function calculateEndTime(startTime, duration) {
    return moment(startTime).add(duration, 'milliseconds').toString().slice(3, 24);
}
