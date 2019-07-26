import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.figure`
border: 5px solid black;
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (page > 0 && page < 25) {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch(err => console.log(err))
    }

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page])

  return (
    <>
      <div className="buttons">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <section className='character-list grid-view'>
        {characters.map(char => (
          <Card>
            <img src={char.image} alt='image' />
            <div>{char.name}</div>
            <div>{char.location.name}</div>
            <div>{char.origin.name}</div>
          </Card>
        ))}
      </section>
    </>
  )
}
