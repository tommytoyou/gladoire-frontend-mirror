import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'



const MessageList = (props) => {
    const { } = props.messageList;

    return (
        <div className="MessageList">
            <ul>
                <li>: {}</li>

            </ul>
        </div>
    )
}

export default MessageList;