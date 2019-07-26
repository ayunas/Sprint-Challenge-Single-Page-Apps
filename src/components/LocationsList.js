import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Card = styled.figure`
border: 2px solid black;
border-radius: 10px;
padding: 5px;
width: 40%;
min-height: 100px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: lightskyblue;
`;

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (page > 0 && page < 4) {
            axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
                .then(res => {
                    console.log(res.data);
                    setLocations(res.data.results);
                })
                .catch(err => console.error(err));
        }
    }, [page])

    return (
        <>
            <div className="buttons">
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div><br />
            <section className='location-list grid-view'>

                {locations.map(spot => (
                    <Card>
                        <div>{spot.name}</div>
                        <div src={spot.type} alt='image' />
                        <div>{spot.dimension}</div>
                        <button id="resident-btn">{spot.residents.length} residents</button>
                    </Card>
                ))}

            </section>
        </>
    )
}


