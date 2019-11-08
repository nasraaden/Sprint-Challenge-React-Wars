import React, { useState, useEffect } from 'react';
import PeopleCard from './PeopleCard';
import axios from 'axios';

export default function PeopleList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://lambda-swapi.herokuapp.com/api/people/')
        .then(response => {
            console.log(response)
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log("The data was not returned", error);
        });
    }, [])

    return (
        <div className='character'>
          {characters.map((character, index) => {
            return (
              <PeopleCard
                key={index}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                height={character.height}
                mass={character.mass}
                hair_color={character.hair_color}
                eye_color={character.eye_color}
              />
            );
          })}
        </div>
      );
}

 

