import React, {Component} from 'react'

import Search from './Search'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="title">
            <h1>MOVIE<span id="header-bold">BASE</span></h1>
          </div>
          <div className="search">
            <div><i className="fa fa-search fa-lg"></i></div>
            <Search fetchAPI={this.props.fetchAPI}/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
