import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import DisplayAllAnime from './DisplayAllAnime';

function IndividualUser() {
    const[user, setUser] = useState([]);
    const [list, setList] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users/${id}`)
                console.log("This is our users response: ", response)
                setUser(response.data);
                setList(response.data.listArray);
                console.log("This is our response data in individual user", response)
            } catch(error) {
                console.log(error)
            }
    
        }

        fetchData();
    }, [])

    useEffect( () => {
        if (!user) {
            return <p>Loading...</p>
        } else {
            console.log( "this is our user: ", user)
        }
    }, [user])

    const destroy = () => {
        axios({
            url: `http://localhost:3001/api/users/${id}`,
            method: "DELETE",
        })
        .then( () => setDeleted(true))
        .catch(console.error);
    }

    useEffect( () => {
        if (deleted) {
            return navigate("/users")
        }
    }, [deleted, navigate])

 

    return (
        <div className='individual-user-page'>
        <h2>{user.username}'s Anime List</h2>
        <button onClick={() => destroy()}>Delete user?</button>
         {/* Here we'll have the anime printed out.  */}

{console.log("This is the list: " + list + "This is the type of list: " + typeof user.listArray)}
         {list.map( (anime_id, index) => {
          

             return (
             <DisplayAllAnime anime_id={anime_id} />
             )

        }) }
         

        <NavLink to={`/users/${id}/edit`}>
            <button>Edit User Details</button>
        </NavLink>

        <NavLink to="/users">
            Back to All Users
        </NavLink>
        </div>
    )
}

export default IndividualUser;
