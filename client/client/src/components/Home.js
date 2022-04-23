import axios from 'axios';
import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import AnimeCardV3 from './AnimeCardV3';

function Home() {
    const [popAni, setPopAni] = useState([])

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

    return(
        <div className="home-main-div">
            <h2>Yokoso, people.</h2>
            <h4>Take a look at some popular anime...</h4>

            <h5>The Top 50: (RIP my page)</h5>
            {popAni !== null ? popAni.map( (anime) => {
              return(  <AnimeCardV3 anime={anime} />
              )
            }) : 'Sorry, something went wrong. Please refresh the page.'}
        </div>
    )
}

export default Home;