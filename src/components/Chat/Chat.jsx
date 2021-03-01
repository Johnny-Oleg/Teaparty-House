import React, { useState, useEffect, useRef } from 'react';

import Message from './Message/Message';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState('');
    const scroll = useRef();

    const sendMessage = e => {
        e.preventDefault();
        
        const messagesCopy = [...messages, {id: Math.floor(Math.random() * 10), text: messageValue}];

        setMessages(messagesCopy);
        setMessageValue('');
        scroll.current.scrollIntoView({behavior: 'smooth'});
    }

    // console.log(messages, messageValue);

    return (
        <div>
            <h3>Chat</h3>
            <div className="chat">
                {messages && messages.map(message => <Message key={message.id} message={message.text} />)}
                <div ref={scroll}></div>
            </div>
            <form action="" onSubmit={sendMessage}>
                <input 
                    type="text" 
                    value={messageValue} 
                    onChange={e => setMessageValue(e.target.value)} 
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                    placeholder="Write a message..." 
                    required
                />
                <button className="chat-btn"type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;