import { useState } from 'react';
import randomCall from '../services/randomCall';

function SearchAnime() {
    //Here, we'll insert another state. 
    //For now, it will be the single state

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
    
      const [input, setInput] = useState('');

      const handleOnChange = (event) => {
          event.preventDefault();
          let value = event.target.value;
          console.log('Our value is: ' + value);
          setInput(value);
      }

     async function handleSubmit(event) {
         event.preventDefault();
         const response = await randomCall(input);
         console.log(response);
         //We have to look at this data before setting it to our listState. 
         setList(response)

     }
    return (
        <div className="search-main-div">
            <h1>Search for Anime</h1>
            <input onChange={handleOnChange} type="text"></input>
            <button onClick={handleOnClick}>Search</button>
        </div>
    )
}

export default SearchAnime