// import React, { Component } from 'react';
import React from 'react';

//Menu
import Menu from '../../Header/Menu';

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
            <Menu />
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

// class Movie extends Component {
//     state = {
//         Movies
//     };

//     render() {
//         console.log(Movies);

//         const movies = Movies;
//         const outputMovie = Object.keys(movies).map(function(movie, index) {
//             return (
//                 <div key={index} className="container">
//                     <div className="card">
//                         <ul>
//                             <li>
//                                 <h1>{movies[movie].title}</h1>
//                                 <img src={movies[movie].imageUrl} alt={movies[movie].title} />
//                                 <p>{movies[movie].synopsis}</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             );
//         });

//         return (
//             <div>
//                 <Menu />

//                 <section>
//                     <div className="container-fluid">
//                         <div className="row">
//                             <div>{outputMovie}</div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }
