import React, { Component } from 'react'

import Header from '../../Header/components/Header'
import MovieData from '../../MovieData/components/MovieData'
import Footer from '../../Footer/components/Footer'

const key = process.env.REACT_APP_MY_KEY

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movieData: null
    }
    this.fetchAPI = this.fetchAPI.bind(this)
  }

  fetchAPI(title) {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}`
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=${key}`)
        .then(res => res.json())
        .then(movie => {
          this.setState({
            movieData: movie
          })
        })
      })
  }

  render() {
    return (
      <div className="container">
        <Header fetchAPI={this.fetchAPI}/>
        <MovieData movieData={this.state.movieData} />
        <Footer />
      </div>
    )
  }
}

export default Movies
