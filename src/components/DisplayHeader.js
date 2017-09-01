import React from 'react';

export default class DisplayHeader extends React.Component {
    render() {
        return(
            <div className="display-header mdl-layout__header-row mdl-shadow--1dp">
                <div className="controls clearfix">
                    <button className="left mdl-button mdl-js-button mdl-button--icon" onClick={() => this.props.isMonth ? this.props.actions.subtractMonth() : this.props.actions.subtractWeek()}>
                        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    </button>
                    <h2>{this.props.caption}</h2>
                    <button className="left mdl-button mdl-js-button mdl-button--icon" onClick={() => this.props.isMonth ? this.props.actions.addMonth() : this.props.actions.addWeek()}>
                        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}
