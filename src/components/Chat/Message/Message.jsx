import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const usernames = [
    'Neojin', 'Okarin', 'gerogeri', 'Ayreon', 'Skyerlst',
    'FKNerv', 'saramago', 'nindo', 'Pred8t21r', 'TA_Rubedo',
    'Lex Mercer', 'Arien', 'Retrokun', 'Azzy', 'car breaker'
]

const Message = ({ message }) => {
    const [username, setUsername] = useState('');

    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    useEffect(() => {
        setUsername(random(usernames))
    }, [])

    console.log(message);
    return (
        <div className="chat__message">
            <span>{username}</span>
            <p>{message}</p>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.string,
}

export default Message;