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
   const [tempUrl, setTempUrl] = useState("")
   const [tempField, setTempField] = useState("")
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   //Get the user profile information from the backend API
    //and load it into state.  This is called from the useEffect below it
    const getUserInfo = async()=>{
        let userData = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`)
        setDisplayName(userData.data.display_name)
        setUserEmail(userData.data.email)
        setBg_urls(userData.data.bg_urls)
        setUser_fields(userData.data.custom_fields)
        setPrivacyMode(userData.data.is_hidden)

    }

   //when page loads, get the user information and populate state.
    //In class, they defined the function inside the useEffect, and I found that to be less than optimal at times
    //so now I define the function outside of useEffect and call it from inside
   useEffect(()=>{
       getUserInfo()
   }, [])


    const handleDName = (e)=>{
       setDisplayName(e.target.value)
    }

    const handleEmail = (e)=>{
        setUserEmail(e.target.value)
    }

   const handlePrivacy = (e) =>{
       setPrivacyMode(e.target.value)
   }

   const handleTempURL = (e) =>{
       setTempUrl(e.target.value)
   }

   const addURL = (e) =>{
       let tempList = [...bg_urls]
       tempList.push(tempUrl)
       setBg_urls([...tempList])
       setTempUrl("")
   }

   const handleTempField = (e) =>{
       setTempField(e.target.value)
   }

   const addField = (e) =>{
       let tempList = [...user_fields]
       tempList.push(tempField)
       setUser_fields([...tempList])
       setTempField("")
   }

   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <p>Nickname: {displayName} <input type={"text"} name={"username"} value={displayName} onChange={handleDName} /></p>
       <p>Email: {userEmail}  <input type={"text"} name={"useremail"} value={userEmail} onChange={handleEmail} /></p>
       <div>
           {bg_urls.join("<br />")}
       </div>
       <p>Add YT URL: <input type={"text"} name={"newUrl"} value={tempUrl} onChange={handleTempURL}/> <button onClick={addURL}>Add URL</button> </p>
       <div>
           {user_fields.join("<br />")}
       </div>
       <p>Add Custom Field: <input type={"text"} name={"newField"} value={tempField} onChange={handleTempField}/> <button onClick={addField}>Add Field</button> </p>
       <p>Privacy Enabled: {privacyMode}</p>
       <label htmlFor={"privacy"}>Privacy Mode</label>
       <select name={"privacy"} onChange={handlePrivacy}>
           <option value={0} selected={privacyMode === 0}>Off</option>
           <option value={1} selected={privacyMode === 1}>On</option>
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