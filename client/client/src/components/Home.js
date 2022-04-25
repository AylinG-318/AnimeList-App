import axios from 'axios';
import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import AnimeCardV3 from './AnimeCardV3';
import { NavLink } from 'react-router-dom';
function Home() {
    const [popAni, setPopAni] = useState([])
    const [goForIt, setGoForIt] = useState(false)

        //--------------Activate User Select Section -----------------
        const [currentUser, setCurrentUser] = useState({});
        const [userObj, setUserObj] = useState('');
        const [allUsers, setAllUsers] = useState([])
      
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users`)
                console.log("our api call response for users: ", response)
                setAllUsers(response.data.users);
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect( () => {
            fetchData();
        }, [])
    
        const userData = allUsers.map( (user, index) => {
            return (
                <label>
               <input 
               type="radio"
               name ="userSelect"
               value={user.username}
               onChange={() => {
                   setCurrentUser(user) 
                   console.log(currentUser);
                   return (
                       <p>Current User: {user.username}</p>
                   )
               }}/>
               {user.username}
               </label>
            )
        })
    
        //---------------End of Activate User Select Section ---------------

    const getPopAnime = async () => {
        //REMINDER: Find the v4 version ASAP. This will be depreciated in September. 
        // This is the API call for general popular anime. 
        const response = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        setPopAni(response.data.top)
        console.log(popAni[0]);
    }

    useEffect(() => {
        getPopAnime();
    }, [])

  

    const showAnime = (currentUser, popAni) => {
        setGoForIt(!goForIt);
    }
    return(
        <div className="home-main-div">
            <h2>Yokoso.</h2>
            <h3>Select a User, then press the button below.</h3>
{/*             
            <h4>Take a look at some popular anime...</h4> */}

            <div className="random-anime-main">
                  <div className='userSelect-form'>
                
                <h1>Select Current User</h1>
                <NavLink to="/user-create">
                    <h3>Create a New User?</h3>
                </NavLink>
                {userData}
            
        </div>

            <h5>The Top 50</h5>
            <button onClick={showAnime}>Show Top 50 Anime</button>
            {goForIt === true ? popAni.map( (anime) => {
              return(  <AnimeCardV3 anime={anime} currentUser={currentUser}/>
              )
            }) : 'Press the button for the current Top 50 anime.'}
        </div>
        </div>
    )
}

export default Home;