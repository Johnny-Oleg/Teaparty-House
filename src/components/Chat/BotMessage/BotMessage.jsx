import React from 'react';
import PropTypes from 'prop-types';

const BotMessage = ({ message }) => {
    const bot = message => {
        switch (message.toLowerCase()) {
            case '@Johnny hi':
               return 'Hey';
            case '@Johnny привет':
                return 'Привет!'
            default:
                return 'Hello from bot! <3';
        }
    }

    const response = bot(message);

    return (
        <div>
            <div className="chat-bot__message">
            <span>@Johnny</span>
            <p>{response}</p>
        </div>
        </div>
    )
}

BotMessage.propTypes = {
    message: PropTypes.string,
}

export default BotMessage;