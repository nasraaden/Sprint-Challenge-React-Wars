import React from 'react';
import styled from "styled-components";

export default function PeopleCard(props) {

    const CharacterCard = styled.div`
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        margin: 2%;

    `

    return (
        <CharacterCard>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p> 
        </CharacterCard>
    );
}

