//The difference between this one and the regular one is that this one will have the CRUD function of "delete",
// in the form of a button. 

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { set } from 'mongoose';

function UserAnimeCard(props) {
    const navigate = useNavigate
    const [updated, setUpdated] = useState(false);

    const [user, setUser] = useState({
        // username: "",
        // email: "",
        // listArray: [],
    });
    //Our user info should be in object form. 

    const anime_id = props.anime.mal_id;
    const { id } = useParams(); 
    //We need the id to access our user. 

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users/${id}`)
                console.log("Our user: ", response);
                setUser(response.data);
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const removeFromList = () => {
        //We don't quite need to target anything. There is no data that we need from the button. 
        //We're not yet updating our data in the database ---,
        //right now, we take our ListArray, and filter out the number. 
        const userArray = user.listArray;

        const filteredArray = userArray.filter( (item) => {
            // (item !== anime_id)
            console.log('lol its not filtering')
        })
        const updatedList = { "listArray" : filteredArray}
        const editedArray = Object.assign(user, updatedList);
        //So now, hopefully we've assigned what we had to assign...
        //This is going to be slow, I bet.
        
        // setUser(editedArray)
    }

    const handleRemoveClick = () => {
        //The page should refresh after this, actually. 
        axios({
            url: `http://localhost:3001/api/users/${id}`,
            method: "PUT",
            data: user
        })
        .then(() => setUpdated(true))
        .catch(console.error);
    }

    useEffect(() => {
        if (updated) {
            return navigate(`/userList/${id}`)
        }
    })

    return (
        <div className="anime-card">
            <div className="anime-info">
            <h3>{props.anime.title}</h3>
            {/* <img src={props.anime.images.jpg.image_url} />
            <p>{props.anime.synopsis}</p> */}
            </div>
          
            {/* <img src={props.anime.images.jpg.image_url}/> */}
            <div className="anime-button">
            <button onClick={removeFromList}>Remove from List</button>
            </div>
           
        </div>
    )
}

export default UserAnimeCard;