import React, { useEffect, useState } from "react";
import axios from 'axios';
// import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/',{})
    .then(res =>{
      setCharacterList(res.data.results);
    })
    .catch(err=>{
      console.log(err);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <section className="character">
        {characterList.map( character => (
          <div key={character.id} className="page-view">
            {/* <CharacterCard character={character} /> */}
          </div>
        ))}
        <h2>TODO: `array.map()` over your state here!</h2>
      </section>
      
    </section>
  );
}
