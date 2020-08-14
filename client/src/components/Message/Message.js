import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({message, name}) => {
    const trimmedName = name.trim().toLowerCase();
    if(message.user == trimmedName) {
        return(
            <div className="messageContainer me">
                <div className="me-chat">
                    {
                        ReactEmoji.emojify(message.text)
                    }
                </div>
            </div>
        )

    } else {

        return(
            <div className="messageContainer client">
                <div className="client-chat">
                    { ReactEmoji.emojify(message.text) }
                </div>
                <div>
                    { message.user }
                </div>
            </div>
        )

    }

    
}


export default Message;