import React, {Component} from 'react'

class Search extends Component {
  constructor() {
    super()
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e){
    e.preventDefault()
    const searchValue = e.target.search.value
    this.props.fetchAPI(searchValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" name="search" placeholder="Search . . ."/>
        </form>
      </div>
    )
  }
}

export default Search
