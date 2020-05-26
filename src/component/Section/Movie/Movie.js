// import React, { Component } from 'react';
import React from 'react';
import styled from '@emotion/styled';

// Styles
//import './Movie.css';

//Json Movie
import Movies from '../../../json/Movies-json';
const movies = Movies;

const Section = styled.section`
    padding: 10px 15px;
    ul {
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            position: relative;
            padding: 10px 20px;
            margin: 25px 0 0 0;
            &:hover {
                p {
                    display: inline-block;
                    padding: 10px 15px;
                    color: #000;
                    background-color: #e3e3e3;
                }
            }
            img {
                width: 100%;
                max-width: 250px;
            }
            p {
                display: none;
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 10px 20px;
            }
        }
    }
`;
const OutputMovie = () => {
    return Object.keys(movies).map(function(movie, index) {
        return (
            <li key={index}>
                <h1>{movies[movie].title}</h1>
                <a href={movies[movie].urlLinks}>
                    <img src={movies[movie].imageUrl} alt={movies[movie].title} />
                    <p>{movies[movie].synopsis}</p>
                </a>
            </li>
        );
    });
};

const Movie = () => {
    return (
        <div>
            <Section>
                <div>
                    <ul>
                        <OutputMovie />
                    </ul>
                </div>
            </Section>
        </div>
    );
};

export default Movie;
