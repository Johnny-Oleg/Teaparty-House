import React from 'react';
import PropTypes from "prop-types";

const BotMessage = ({ message }) => {
    // console.log(message);
    return (
        <div>
            <div className="chat-bot__message">
            <span>@Johnny</span>
            <p>{'Hello from bot! <3'}</p>
        </div>
        </div>
    )
}

BotMessage.propTypes = {
    message: PropTypes.string,
}

export default BotMessage;