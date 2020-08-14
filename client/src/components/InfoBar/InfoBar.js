import React from "react";

import "./InfoBar.css";

const InfoBar = ({room}) => {
	return (
		<div className="infoBarContainer">
			<div className="rightBar">
				<a className="avatar">
					<i class="fad fa-user-circle"></i>
                    <span>{room}</span>
				</a>
				
			</div>
			<div className="leftBar">
                <a href="/">
                    <i class="fad fa-times"></i>
                </a>
            </div>
		</div>
	);
};

export default InfoBar;
