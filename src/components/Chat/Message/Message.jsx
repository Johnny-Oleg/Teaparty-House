import React from 'react';
import PropTypes from "prop-types";

const Message = ({ message }) => {
    console.log(message);
    return (
        <div className="chat__message">
            <span>Жмычара</span>
            <p>{message}</p>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.string,
}

export default Message;