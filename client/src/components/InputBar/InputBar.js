import React from "react";


import "./InputBar.css";

const InputBar = ({ message, setMessage, sendMessage }) => {
	return (
		<form className="form" onSubmit={(event) => sendMessage(event)}>
			<input
				placeholder="Type a message"
				value={message}
				onChange={(event) =>
					setMessage(event.target.value)
                }
                
                onKeyPress={(event) =>
                    event.key == "Enter"
                        ? sendMessage(event)
                        : null
                }
			/>
			<button type="submit">
				<i class="fad fa-paper-plane"></i>
			</button>
		</form>
	);
};

export default InputBar;
