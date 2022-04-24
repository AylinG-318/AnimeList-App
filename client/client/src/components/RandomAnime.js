import AnimeCard from "./AnimeCard";
//what was i even doing last night? 
// Let the user click a button...
import { useState, useEffect } from 'react';
import randomCall from "../services/randomCall";

function RandomAnime() {
    //You know what? Let's do this the dirty way...
    // Every component, we load a user. Redux is better, but I don't know if I have time to make sense of it. 
    //

    const [user, setUser] = useState('');
    
    const [randomAni, setRandomAni] = useState()

    const handleOnClick = async () => {
        alert('click confirmed.')
       try {
           const animeData = await randomCall();
           setRandomAni(animeData);
       } catch (e) {
           console.log(e)
       }
    }

  

    return (
        <div className="random-anime-main">
            <button onClick={handleOnClick}>Show a Random Anime</button>
            {randomAni ? <AnimeCard anime={randomAni} />  : `There is no random anime to display.`}
        </div>
    )
}

export default RandomAnime;