import { useState } from 'react';
import searchCall from '../services/searchCall';
import AnimeCardV3 from './AnimeCardV3';

function SearchAnime() {
    //Here, we'll insert another state. 
    //For now, it will be the single state

  
    const [animeResults, setAnimeResults] = useState([])    
    const [input, setInput] = useState('');

      const handleOnChange = (event) => {
          event.preventDefault();
          let value = event.target.value;
          console.log('Our value is: ' + value);
          setInput(value);
      }

     async function handleSubmit(event) {
         event.preventDefault();
         const response = await searchCall(input);
         setAnimeResults(response);
         console.log(animeResults);
        //  setAnimeResults(response)
         //We have to look at this data before setting it to our listState. 
  

}
    return (
        <div className="search-main-div">
            <h1>Search for Anime</h1>
            <input onChange={handleOnChange} type="text"></input>
            <button onClick={handleSubmit}>Search</button>

 
            <div className='search-results'>
            {(animeResults != null) ? animeResults.map( (anime) => {
              return (  <AnimeCardV3 anime={anime} />
              )
            }) : 'There are no anime that match your search.' }

            </div>

        </div>
    )
}

export default SearchAnime