import React from 'react';
import WarningIcon from './Media/alertCard.svg';
import './StatusCards.css';

const StatusCards = ( props ) => {
    switch(props.severity) {
        case 'normal':
            return(
                <div className="StatusCard">
                    <div className="StatusNormal">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
        case 'warning':
            return (
                <div className="StatusCard">
                    <div className="StatusWarning">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
        case 'critical':
            return (
                <div className="StatusCard">
                    <div className="StatusCritical">
                        <img className="criticalIcon" src={WarningIcon} alt="CriticalIcon"/>
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            );
        default:
            return (
                <div className="StatusCard">
                    <div className="StatusDefault">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
    }
};

export default StatusCards;