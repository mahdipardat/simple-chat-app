import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import InputBar from "../InputBar/InputBar";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const ENDPOINT = "https://pardat-chat.liara.run/";

	useEffect(() => {
		const { name, room } = queryString.parse(
			location.search
		);

		setName(name);
		setRoom(room);

		socket = io(ENDPOINT);

		socket.emit("join", { name, room }, () => {});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {

		socket.on("message", (message) => {
			
			setMessages([...messages, message]);

		}, [messages]);

		

    });
    

    const sendMessage = (event) => {
        event.preventDefault();
		
		if(message) {
			socket.emit('sendMessage' , message , () => setMessage(''));
		}
    }

    

	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<InputBar message={message} setMessage={setMessage} sendMessage={sendMessage} />	
			</div>
		</div>
	);
};

export default Chat;
