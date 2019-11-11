import React from 'react';
import styled from "styled-components";

export default function PeopleCard(props) {

    const CharacterCard = styled.div`
        border: 2px solid white;
        margin: 2%;
        width: 400px;
        height: 300px;
        padding: 1%;
        margin: 30px;
        color: white;
        transition: transform 0.3s linear;

        &:hover{
            color: yellow;
            border: 2px solid yellow;
            transform: translate(-5px) scale(1.05);
        }
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

