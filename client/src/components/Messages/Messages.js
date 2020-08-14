import React from 'react';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

import Message from '../Message/Message';

const Messages = ({messages, name}) => {
    return(
        <ReactScrollToBottom className="messages">
            { messages.map((message, id) => <div key={id} ><Message message={message} name={name} /></div>)}
        </ReactScrollToBottom>
    )
}


export default Messages;