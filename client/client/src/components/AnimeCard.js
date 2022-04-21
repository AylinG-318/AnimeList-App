import { useState } from 'react';

function AnimeCard(props) {
    const [list, setList] = useState([])

    const addToUserList = () => {
        // Here, we'll have to call the backend API, correct? 
        // Call backend user -- depending on who is logged in.
        // If I cannot figure out authetication - and as the moron i am, of course i won't --
        // Have a general state --- empty list, and add to it. Then display. 
        // console.log(`This is what we want---${props.anime.mal_id}`)

( (list === null) ? setList(props.anime.mal_id) : setList( prevState => 
            [...prevState, props.anime.mal_id]
            //This is how it's done, right? Even StackOverflow agrees with me...
        )   );

        //The above needs to be edited - we have to add to this array...
        //oh, is this where linked lists would come in handy? 
        // One issue -- it needs two clicks to update...
        
        console.log(list);
        console.log(typeof props.anime.mal_id)
        alert(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list."`)
        //Then we add that to our list.
        //When we click on "user profile" or "user-page"
        // We want to make an api call to get all of these titles at once and map them out. 

        // oh shit...we need redux, don't we?
        // several components where we'll add to this list, so one useState isn't going to work for this...
        // ...fuck. 
    }

    return (
        <div className="anime-card">
            <div className="anime-info">
            <h3>{props.anime.title}</h3>
            <img src={props.anime.images.jpg.image_url} />
            <p>{props.anime.synopsis}</p>
            </div>
          
            {/* <img src={props.anime.images.jpg.image_url}/> */}
            <div className="anime-button">
            <button onClick={addToUserList}>Add to List</button>
            </div>
           
        </div>
    )
}

export default AnimeCard;