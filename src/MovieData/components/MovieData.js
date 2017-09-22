import React, { Component } from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import MovieHome from './MovieHome'

class MovieData extends Component {

  render() {
    let movie = this.props.movieData
    if(movie) {
      let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
      let background = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
      return (
        <div className="flex-wrapper">
          <div className="movie-wrapper">
            <div className="movie-poster">
              <img src={poster} alt=""/>
            </div>
            <div className="movie-data">
              <h1>{movie.title}  &nbsp; <span id="year">({movie.release_date.substring(0, 4)})</span></h1>
              <h3>{movie.tagline}</h3>
              <p>{movie.overview}</p>
              <div className="stats">
                <div className="stats-left">
                  {movie.revenue ?
                  <div id="first">
                    <h4>Revenue</h4>
                    <h2>${movie.revenue.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")}</h2>
                  </div>
                  : null}
                  <div>
                    <h4>Rating</h4>
                    <Rater total={10} rating={movie.vote_average} interactive={false}/>
                    <br/><small> {movie.vote_average} | 10 &nbsp; ({movie.vote_count} Votes) </small>
                  </div>
                </div>
                <div className="stats-right">
                  {movie.budget ?
                  <div>
                    <h4>Budget</h4>
                    <h2>${movie.budget.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")}</h2>
                  </div>
                  : null}
                  <div>
                    <h4>Runtime</h4>
                    <h2>{movie.runtime} MIN</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop">
              <img src={background} alt=""/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <MovieHome />
      )
    }
  }
}

export default MovieData

// {
//   adult: false,
//   backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
//   belongs_to_collection: null,
//   budget: 165000000,
//   homepage: "http://www.interstellarmovie.net/",
//   id: 157336,
//   imdb_id: "tt0816692",
//   original_language: "en",
//   original_title: "Interstellar",
//   overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
//   popularity: 208.959533,
//   poster_path: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
//   release_date: "2014-11-05",
//   revenue: 675120017,
//   runtime: 169,
//   status: "Released",
//   tagline: "Mankind was born on Earth. It was never meant to die here.",
//   title: "Interstellar",
//   video: false,
//   vote_average: 8.1,
//   vote_count: 10713
// }
