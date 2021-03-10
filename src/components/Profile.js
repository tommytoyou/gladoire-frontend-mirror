import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp } = user;
   const [displayName, setDisplayName] = useState("")
   const [userEmail, setUserEmail] = useState("")
   const [bg_urls, setBg_urls] = useState([])
   const [user_fields, setUser_fields] = useState([])
   const [privacyMode, setPrivacyMode] = useState(0)
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }
    const getUserInfo = async()=>{
        let userData = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`)
        setDisplayName(userData.data.display_name)
        setUserEmail(userData.data.email)
        setBg_urls(userData.data.bg_urls)
        setUser_fields(userData.data.custom_fields)
        setPrivacyMode(userData.data.is_hidden)

    }

   useEffect(()=>{
       getUserInfo()
   }, [])


   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <p>Nickname: {displayName}</p>
       <p>Email: {userEmail}</p>
       <p>YT URLs: {bg_urls}</p>
       <p>Privacy Enabled: {privacyMode}</p>
       <label htmlFor={"privacy"}>Privacy Mode</label>
       <select name={"privacy"} >
           <option value={0} selected={privacyMode == 0}>Off</option>
           <option value={1} selected={privacyMode == 1}>On</option>
       </select>
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;