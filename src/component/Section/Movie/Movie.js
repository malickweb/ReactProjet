// import React, { Component } from 'react';
import React from 'react';

// Styles
import './Movie.css';

//Json Movie
import Movies from '../../../json/Movies-json';
const movies = Movies;

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
            <section className="containerMovie">
                <div>
                    <ul>
                        <OutputMovie />
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Movie;
