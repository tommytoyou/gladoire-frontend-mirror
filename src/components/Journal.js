import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useTimer } from 'react-timer-hook';


const Journal = (props) => {
    const { display_name, date_joined, duration,  location, notes} = props.user;

    return (
        <div className="Journal">
            <ul>
            <li>Meditator: {display_name}</li>
            <li>Date Joined: {date_joined}</li>
            <li>Time Meditating: {duration}</li>
            <li>Where: {location}</li>
            <li>Notes: {notes}</li>
            </ul>


            <div>
            <form method="POST" action="/posts">
                <fieldset>
                <legend class="text-center">As My Mind Slowly Clears</legend>
                <div>
                    <label for="title">This Day's Realization...</label>
                    
                    <input type="text" name="title" id="title" placeholder="How to express this?" />
                </div>
                <div>
                    <label for="title">🧎 As I Meditated 🧎</label> 
                    <label>
                        . . .
                    </label>
                    <textarea name="content" class="form-control" id="exampleFormControlTextarea1" rows="18"></textarea>
                </div>
                <button>To Cherish Another Time</button>
                </fieldset>
            </form>
            </div>

        </div>
    )
}

export default Journal;