import React from 'react';
import './Discord.css';

const Discord = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     

    return (
        <div className="discord">
            <div className="info-discord">
                <p>Want some more help? Talk to us!</p>
                <button>˅</button>
            </div>
            <div className="dropup-discord">
                <iframe className="iframe-discord" src={src}></iframe>
            </div>
        </div>
    );
};

export default Discord;