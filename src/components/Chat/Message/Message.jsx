import React from 'react';
import PropTypes from 'prop-types';

const usernames = [
    'Neojin', 'Okarin', 'gerogeri', 'Ayreon', 'Skyer1st',
    'fknerv', 'saramago', 'nindo', 'Pred8tor', 'TA_Rubedo'
]

const Message = ({ message }) => {
    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    console.log(message);
    return (
        <div className="chat__message">
            <span>{random(usernames)}</span>
            <p>{message}</p>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.string,
}

export default Message;