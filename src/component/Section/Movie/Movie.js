import React, { Component } from 'react';

//Menu
import Menu from '../../Header/Menu'

//Json Movie
import Movies from '../../../json/Movies-json';

class Movie extends Component {

  state = {
    Movies
  };

  render() {
    console.log(Movies);

    const movies = Movies;
    const outputMovie = Object.keys(movies).map(function (movie, index) {
      return (
        <div key={ index } className="col-xs-12 col-md-4 col-lg-3">
          <div className="card">
            <ul>
              <li>
                <h1>{ movies[movie].title }</h1>
                <img src={ movies[movie].imageUrl } alt={ movies[movie].title } />
                <p>{ movies[movie].synopsis }</p>
              </li>
            </ul>
          </div>
        </div>
      )
    });

    return (
      <div>

        <Menu></Menu>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div>
                { outputMovie }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Movie;
