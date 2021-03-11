import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'



const Journal = (props) => {
    const { user, date, duration,  location, notes} = props.journal;

    return (
        <div className="Journal">
        <ul>
        <li>Journal: {user}</li>
        <li>Journal:Today: {date}</li>
        <li>Journal:Time Elapsed: {duration}</li>
        <li>Journal: {location}</li>
        <li>Journal: {notes}</li>
        </ul>

        </div>
    )
}

export default Journal;
