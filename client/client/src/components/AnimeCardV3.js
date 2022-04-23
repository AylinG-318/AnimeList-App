import { useState } from 'react';

function AnimeCardV3(props) {
    const [list, setList] = useState([])

    const addToUserList = () => {
   
( (list === null) ? setList(props.anime.mal_id) : setList( prevState => 
            [...prevState, props.anime.mal_id]
            //This is how it's done, right? Even StackOverflow agrees with me...
        )   );

        console.log(list);
        alert(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list."`)
      //Then we add that to our list.
}

    return (
        <div className="anime-card-v3">
            <h1>{props.anime.title}</h1>
            <img src={props.anime.image_url}/>
            <p>{props.anime.sypnosis}</p>
            <button onClick={addToUserList}>Add to List</button>
        </div>
    )
}

export default AnimeCardV3;