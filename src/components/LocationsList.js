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

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log(res.data);
                setLocations(res.data.results);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className="buttons">
                <button onClick={console.log('clicked')}>Previous</button>
                <button onClick={console.log('clicked')}>Next</button>
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


