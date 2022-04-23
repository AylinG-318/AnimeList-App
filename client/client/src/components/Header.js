import randomCall from "../services/randomCall";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import AnimeCard from "./AnimeCard";

function Header() {

    const [randomAni, setRandomAni] = useState()
    const [userSelected, setUserSelected] = useState([])
    //Our users API call is in an array, right? 
    //But just because it's in our header, it doesn't meant that it'll be accessible by the prop components. 
   // Trouble still stands.

    const handleOnClick = async () => {
        alert('click confirmed.')
       try {
           const animeData = await randomCall();
           setRandomAni(animeData);
       } catch (e) {
           console.log(e)
       }
    }
    
    // useEffect( () => {
    //     handleOnClick();
    // }, [setRandomAni, randomAni])

    return (
        <div>
            <h1>This is an anime site.</h1>
            <p>You're going to have to replace this, anyway. </p>
            <nav>
                <ul>
                <NavLink to="/">
                    <li>Home</li>
                    </NavLink>

                    <NavLink to="/search">
                    <li>Search</li>
                    </NavLink>
                    
                    <NavLink to="/random">
                    <li>Random Anime</li>
                    </NavLink>

                    <NavLink to="/users">
                        <li>Users</li>
                    </NavLink>

                    <li>About this asshole website maker.</li>

                </ul>
            </nav>

            <div className="user-icon">
                {/* Here's where a clickable image goes. */}
                <img onClick={handleOnClick} src="*"/>
                {/* Api call for a user picture... */}
                {/* Huh, will that work? */}
               
            </div>

            {randomAni ? <AnimeCard anime={randomAni} />  : `There is no random anime to display.`}
        </div>
    )
}

export default Header; 