import { useState, useEffect } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';

import UserAnimeCard from './UserAnimeCard';
import animeIdCall from '../../services/animeIdCall';

function DisplayAllAnime(props) {
    //The props will be the listItem....

    //What do we have to do here? 
    // We have to get a user, and all their associated
    // anime mal_ids.
    // Ideally, it would be in an array. 
    // We map through the array and do an api call and 
    //...display the result each time.

    //We'd need a use state, and this time it can be a basic one, I believe. All the data will be in the backend server. 
    const { id } = useParams();

    const [anime, setAnime] = useState({});

    // const fetchData = async () => {
    //     try {
    //         const response = await axios(`http://localhost:3001/api/users/${id}`)
    //         console.log("our api call response for *a* user: ", response)
    //         setUser(response.data.users);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])

    //Don't do the above. It's a waste. Pass it down as a prop instead. 
    // We need to do an API call for anime, however. 

    const fetchAnimeData = async (props) => {
        try {
            const response = await animeIdCall(props.anime_id);
            setAnime(response); 
        } catch(e) {
            console.log(e);
        }
    }

    useEffect( () => {
        fetchAnimeData();
    }, [])
    
    return (
     <UserAnimeCard anime={anime} />
    )


}

export default DisplayAllAnime;